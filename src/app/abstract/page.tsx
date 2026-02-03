"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AbstractPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="Abstract submission"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

        <nav className="absolute top-0 z-20 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
            <Link href="/" className="flex items-center gap-3 text-white">
              <Image
                src="/logo2.png"
                width={72}
                height={20}
                alt="Congress Logo"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/15"
            >
              Back to Home
            </Link>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <span className="mb-4 rounded-full border border-white/30 px-4 py-1 text-xs tracking-wide text-white/80">
            16 - 19 September 2026, Hurghada
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Abstract Submission
            <span className="mt-2 block bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              Share your research or theory
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
            Submit your abstract to be considered for the 32nd International Congress of Pediatric
            Hepatology, Gastroenterology & Nutrition.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/40 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
              Abstract Guidelines
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Submit your abstract
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Complete the form below and our team will confirm your submission.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3 text-sm text-slate-700">
            <p>For research presentations, A 300 word structured abstract is needed as such.</p>
            <p className="mt-2">
              For theoretical presentations. A 300 word summary is needed
            </p>
          </div>

          <form
            action="https://formspree.io/f/xgozbqoy"
            method="POST"
            className="mt-8 grid gap-5"
            onSubmit={() => setIsSubmitting(true)}
          >
            <input type="hidden" name="_cc" value="melshabrawi@kasralainy.edu.eg,mina.remon@icloud.com" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  name="Name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Affiliation</label>
                <input
                  type="text"
                  name="Affiliation"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                  placeholder="Organization / Institution"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  name="Phone Number"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                  placeholder="+20 ..."
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">Abstract</label>
              <textarea
                name="Abstract"
                rows={8}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                placeholder="Paste your abstract here (300 words)."
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Submission
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Abstracts will be reviewed and confirmed by email.
                </p>
              </div> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit abstract"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
