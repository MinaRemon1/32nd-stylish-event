"use client";

import { FormEvent, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { ArrowRight, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminSignInForm() {
  const router = useRouter();
  const clerk = useClerk();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!clerk.loaded || !clerk.client || isSubmitting) {
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const result = await clerk.client.signIn.create({
        strategy: "password",
        identifier,
        password,
      });

      if (result.status === "complete") {
        await clerk.setActive({ session: result.createdSessionId });
        router.refresh();
        router.push("/admin");
        return;
      }

      setError("This account requires an additional verification step before it can access the admin portal.");
    } catch (caughtError) {
      if (isClerkAPIResponseError(caughtError)) {
        setError(caughtError.errors[0]?.longMessage || "The username or password is incorrect.");
      } else {
        setError("Unable to sign in right now. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Image
        src="/hero2.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.96),rgba(15,23,42,0.84)_48%,rgba(234,88,12,0.62))]" />

      <div className="relative z-10 flex min-h-screen items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1fr_440px] lg:gap-14">
          <section className="max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-200 transition hover:text-white"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to website
            </Link>

            <div className="mt-10 flex items-center gap-3">
              <Image
                src="/logo2.png"
                width={96}
                height={28}
                alt="Congress Logo"
                className="h-auto w-24 object-contain"
              />
              <span className="h-8 w-px bg-white/20" />
              <span className="text-sm font-medium text-white/80">
                Admin access
              </span>
            </div>

            <h1 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Manage the congress website.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              A protected portal for event content, registration operations, and website administration.
            </p>
          </section>

          <section className="rounded-lg border border-white/20 bg-white p-6 text-slate-950 shadow-2xl shadow-slate-950/40 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  Welcome back
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Sign in to Admin
                </h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Username
                </span>
                <span className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-orange-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100">
                  <UserRound className="h-5 w-5 text-slate-400" />
                  <input
                    value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}
                    autoComplete="username"
                    required
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                    placeholder="Enter your username"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Password
                </span>
                <span className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-orange-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100">
                  <LockKeyhole className="h-5 w-5 text-slate-400" />
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    type="password"
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                    placeholder="Enter your password"
                  />
                </span>
              </label>

              {error ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={!clerk.loaded || isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-xs leading-5 text-slate-500">
                Access is limited to administrator accounts configured in Clerk.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
