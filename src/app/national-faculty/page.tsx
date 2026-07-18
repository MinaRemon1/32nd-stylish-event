import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function NationalFacultyPage() {
  const facultyMembers = await prisma.nationalFaculty.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="National Faculty"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

        <nav className="absolute top-0 z-20 w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
            <Link href="/" className="flex items-center text-white" aria-label="Home">
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

        <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4 pt-16 text-center text-white sm:px-6">
          <span className="mb-4 rounded-full border border-white/30 px-4 py-1 text-xs tracking-wide text-white/80">
            16 - 19 September 2026, Hurghada
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            National Faculty
          </h1>
          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
        </div>
      </section>

      <main className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 sm:px-4 sm:py-2 sm:text-sm">
              World-Class Faculty
            </span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Meet Our <span className="text-orange-500">National Faculty</span>
            </h2>
          </div>

          {facultyMembers.length > 0 ? (
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {facultyMembers.map((member) => (
                <div
                  key={member.id}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-orange-300 hover:shadow-xl sm:rounded-2xl sm:p-6"
                >
                  <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white shadow-sm sm:h-40 sm:w-40 md:h-48 md:w-48">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-orange-600 sm:text-base">
                      {member.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                      {member.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/logo2.png"
                width={100}
                height={28}
                alt="Congress Logo"
                className="mx-auto h-auto w-[100px] object-contain md:mx-0"
              />
              <p className="mt-4 max-w-md text-xs text-slate-600 sm:text-sm">
                32nd International Congress of Pediatric Hepatology, Gastroenterology &amp; Nutrition
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                href="/"
                className="text-xs font-medium text-slate-700 transition-colors hover:text-orange-500 sm:text-sm"
              >
                Home
              </Link>
              <Link
                href="/abstract"
                className="text-xs font-medium text-slate-700 transition-colors hover:text-orange-500 sm:text-sm"
              >
                Abstract
              </Link>
              <Link
                href="/become-a-sponser"
                className="text-xs font-medium text-slate-700 transition-colors hover:text-orange-500 sm:text-sm"
              >
                Sponsor
              </Link>
              <Link
                href="/register"
                className="text-xs font-medium text-slate-700 transition-colors hover:text-orange-500 sm:text-sm"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6 text-center sm:mt-8 sm:pt-8">
            <p className="text-xs text-slate-500 sm:text-sm">
              © 2026 32nd International Congress of Pediatric Hepatology, Gastroenterology &amp; Nutrition. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
