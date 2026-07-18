import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, FilePenLine } from "lucide-react";
import Link from "next/link";
import AdminSignInForm from "./AdminSignInForm";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user) {
    return <AdminSignInForm />;
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-wide text-orange-500 transition hover:text-orange-600"
            >
              Website
            </Link>
            <h1 className="mt-1 text-2xl font-semibold text-slate-950">
              Admin Portal
            </h1>
          </div>
          <UserButton />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Website content
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Editable Pages
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Select a website page to manage its content from the admin portal.
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <Link
              href="/admin/national-faculty"
              className="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-orange-500 shadow-sm">
                  <FilePenLine className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-semibold text-slate-950">
                    National Faculty
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    Manage the National Faculty page content.
                  </span>
                </span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-500" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
