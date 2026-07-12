import Image from "next/image";
import Link from "next/link";

const facultyImages = [
  { src: "/nationalFaculty1.jpg", width: 2479, height: 2213 },
  { src: "/nationalFaculty2.jpg", width: 2479, height: 2191 },
  { src: "/nationalFaculty3.jpg", width: 2479, height: 2197 },
  { src: "/nationalFaculty4.jpg", width: 2479, height: 1704 },
  { src: "/nationalFaculty5.jpg", width: 2479, height: 2200 },
  { src: "/nationalFaculty6.jpg", width: 2479, height: 2200 },
  { src: "/nationalFaculty7.jpg", width: 2479, height: 2179 },
  { src: "/nationalFaculty8.jpg", width: 903, height: 802 },
  { src: "/nationalFaculty9.jpeg", width: 903, height: 802 },
];

export default function NationalFacultyPage() {
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

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/40">
          {facultyImages.map((image, index) => (
            <div
              key={image.src}
              className={index === 0 ? "" : "border-t border-slate-100"}
            >
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`National Faculty ${index + 1}`}
                className="block h-auto w-full"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
          ))}
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
