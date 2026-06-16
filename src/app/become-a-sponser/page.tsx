import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Mail,
  Megaphone,
  Phone,
  Presentation,
  Sparkles,
  Star,
  Ticket,
} from "lucide-react";

type SponsorPackage = {
  name: string;
  price: string;
  accent: string;
  booth: string;
  symposium: string;
  registrations: string;
  advertisement: string;
  logoPlacement: string;
};

type AddOn = {
  title: string;
  price: string;
  note?: string;
};

const sponsorPackages: SponsorPackage[] = [
  {
    name: "Diamond Sponsor",
    price: "1,250,000 EGP + VAT 14%",
    accent: "from-orange-500 to-amber-400",
    booth: "Booth 24m in a premium location",
    symposium: "Symposium for 01 hour",
    registrations:
      "Registration and accommodation for 25 doctors, single room for 03 nights at available hotel, without transportation",
    advertisement: "Advertisement on Course program, 1 full page",
    logoPlacement: "Name and logo under Diamond sponsor in all printings",
  },
  {
    name: "Platinum Sponsor",
    price: "1,000,000 EGP + VAT 14%",
    accent: "from-slate-500 to-slate-300",
    booth: "Booth 18m in a premium location",
    symposium: "Symposium for 1/2 hour",
    registrations:
      "Registration and accommodation for 20 doctors, single room for 03 nights at available hotel, without transportation",
    advertisement: "Advertisement on Course program, 1 full page",
    logoPlacement: "Name and logo under Platinum sponsor in all printings",
  },
  {
    name: "Golden Sponsor",
    price: "700,000 EGP + VAT 14%",
    accent: "from-yellow-500 to-orange-300",
    booth: "Booth 12m",
    symposium: "Symposium for 1/2 hour",
    registrations:
      "Registration and accommodation for 15 doctors, single room for 03 nights at available hotel, without transportation",
    advertisement: "Advertisement on Course program, 1/2 page",
    logoPlacement: "Name and logo under Golden sponsor in all printings",
  },
  {
    name: "Silver Sponsor",
    price: "500,000 EGP + VAT 14%",
    accent: "from-zinc-400 to-slate-200",
    booth: "Pop up 2 x 3",
    symposium: "Symposium for 1/4 hour",
    registrations:
      "Registration and accommodation for 10 doctors, single room for 03 nights at available hotel, without transportation",
    advertisement: "Advertisement on Course program, 1/2 page",
    logoPlacement: "Name and logo under Silver sponsor in all printings",
  },
];

const addOns: AddOn[] = [
  { title: "Pop up 2 x 3 m", price: "80,000 EGP + VAT 14%" },
  {
    title: "Company logo on Name tag ribbon",
    price: "50,000 EGP + VAT 14%",
    note: "For Diamond and Platinum only",
  },
  { title: "Advertisement on Course program online, 1/2 page", price: "20,000 EGP + VAT 14%" },
  { title: "Company Symposium for 20 minutes", price: "60,000 EGP + VAT 14%" },
  { title: "Company logo on Conference gate", price: "50,000 EGP + VAT 14%" },
  { title: "Roll up in VIP Lounge per day", price: "50,000 EGP + VAT 14%" },
  { title: "Roll up 1 meter", price: "50,000 EGP + VAT 14%" },
  {
    title: "Company logo on Name tag",
    price: "50,000 EGP + VAT 14%",
    note: "For Diamond and Platinum only",
  },
  { title: "Company logo on Conference bag", price: "150,000 EGP + VAT 14%" },
  { title: "Company Symposium for 30 minutes", price: "90,000 EGP + VAT 14%" },
  { title: "Advertisement on Course program online, 1 full page", price: "30,000 EGP + VAT 14%" },
  { title: "Final Conference Ceremony", price: "250,000 EGP + VAT 14%" },
];

const packageHighlights = [
  { label: "Event dates", value: "16 - 19 September 2026", icon: CalendarDays },
  { label: "Location", value: "Continental Hotel Hurghada", icon: Building2 },
  { label: "Packages", value: "4 sponsor tiers", icon: Star },
];

export default function BecomeASponserPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="relative min-h-[66vh] w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="Become a sponsor"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

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

        <div className="relative z-10 flex min-h-[66vh] flex-col items-center justify-center px-4 pt-16 text-center text-white sm:px-6">
          <span className="mb-4 rounded-full border border-white/30 px-4 py-1 text-xs tracking-wide text-white/80">
            Sponsor Price List for 3 days
          </span>
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Become a Sponsor
            <span className="mt-2 block bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              Put your brand at the center of ICPHGN 2026
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Choose a sponsorship package or add targeted visibility options for the 32nd
            International Congress of Pediatric Hepatology, Gastroenterology & Nutrition.
          </p>
          <div className="mt-8 grid w-full max-w-4xl gap-3 sm:grid-cols-3">
            {packageHighlights.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left backdrop-blur-md"
              >
                <Icon className="h-5 w-5 text-orange-300" />
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                Sponsorship package
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                3-day sponsor tiers
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Each package combines on-site visibility, scientific-program participation, doctor
                registration and accommodation, and print recognition.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-700">
              All prices exclude 14% VAT
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {sponsorPackages.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-orange-100/30"
              >
                <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Package
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">{item.name}</h3>
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-left sm:text-right">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                        Investment
                      </p>
                      <p className="mt-1 text-lg font-bold text-slate-900">{item.price}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <SponsorFeature icon={Building2} text={item.booth} />
                    <SponsorFeature icon={Presentation} text={item.symposium} />
                    <SponsorFeature icon={Ticket} text={item.registrations} />
                    <SponsorFeature icon={Megaphone} text={item.advertisement} />
                    <SponsorFeature icon={BadgeCheck} text={item.logoPlacement} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-orange-100/30 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Add-on visibility
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Price list for 3 days
                </h2>
              </div>
              <p className="text-sm font-semibold text-slate-500">All prices exclude 14% VAT</p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {addOns.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-orange-200 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold leading-snug text-slate-900">
                        {item.title}
                      </h3>
                      {item.note && <p className="mt-1 text-xs text-slate-500">{item.note}</p>}
                      <p className="mt-3 text-sm font-bold text-orange-600">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-r from-slate-950 to-slate-800 shadow-xl shadow-orange-100/40">
          <div className="grid gap-6 p-6 text-white sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
                Reservation
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Reserve your sponsorship package
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                For reservation or further information, contact the congress travel team.
              </p>
            </div>

            <div className="grid gap-3">
              <ContactLink href="tel:+201006071661" icon={Phone} label="+2 0100 607 1661" />
              <ContactLink href="tel:+201006071664" icon={Phone} label="+2 0100 607 1664" />
              <ContactLink
                href="mailto:noha.kamal@stylishholidays.travel"
                icon={Mail}
                label="noha.kamal@stylishholidays.travel"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SponsorFeature({
  icon: Icon,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
      <p className="text-sm leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-orange-300" />
      <span className="break-all">{label}</span>
    </a>
  );
}
