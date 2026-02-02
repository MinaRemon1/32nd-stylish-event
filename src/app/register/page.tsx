"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Currency = "EGP" | "USD";
type Category = "Registration" | "Accommodation" | "Plane Ticket";

const currencyLabel: Record<Currency, string> = {
  EGP: "EGP",
  USD: "USD",
};

type TicketItem = {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  price: number;
  currency: Currency;
  badge?: string;
};

const categories: Category[] = ["Registration", "Accommodation", "Plane Ticket"];

const ticketItems: TicketItem[] = [
  {
    id: "early-reg-egp",
    category: "Registration",
    title: "Egyptian",
    subtitle: "Registration fee",
    price: 4000,
    currency: "EGP",
  },
  {
    id: "early-reg-usd",
    category: "Registration",
    title: "Non-Egyptian",
    subtitle: "Registration fee",
    price: 400,
    currency: "USD",
  },
  {
    id: "early-reg-acc-cont",
    category: "Accommodation",
    title: "Continental",
    subtitle: "Continental Hotel Hurghada • SGL 3N + Bag",
    price: 40000,
    currency: "EGP",
  },
  {
    id: "early-reg-acc-marriott",
    category: "Accommodation",
    title: "Marriott",
    subtitle: "Marriott Hotel Hurghada • SGL 3N + Bag",
    price: 50000,
    currency: "EGP",
  },
  {
    id: "early-air",
    category: "Plane Ticket",
    title: "Plane Ticket",
    subtitle: "Limited availability • Starts at 13,500 EGP",
    price: 13500,
    currency: "EGP",
    badge: "Limited",
  },
];

const formatPrice = (value: number, currency: Currency) =>
  currency === "USD"
    ? `$${value.toLocaleString()}`
    : `${value.toLocaleString()} ${currencyLabel[currency]}`;

export default function RegisterPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [step, setStep] = useState<"selection" | "details">("selection");
  const [isContinuing, setIsContinuing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const registrationRef = useRef<HTMLDivElement>(null);

  const groupedItems = useMemo(() => {
    return categories.map((category) => ({
      category,
      items: ticketItems.filter((item) => item.category === category),
    }));
  }, []);

  const totals = useMemo(() => {
    const result: Record<Currency, number> = { EGP: 0, USD: 0 };
    ticketItems.forEach((item) => {
      const qty = quantities[item.id] ?? 0;
      if (qty > 0) {
        result[item.currency] += item.price * qty;
      }
    });
    return result;
  }, [quantities]);

  const totalCount = useMemo(() => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  }, [quantities]);

  const selectedItems = useMemo(() => {
    return ticketItems
      .map((item) => ({
        ...item,
        quantity: quantities[item.id] ?? 0,
      }))
      .filter((item) => item.quantity > 0);
  }, [quantities]);

  const selectionSummary = useMemo(() => {
    if (selectedItems.length === 0) {
      return "No items selected";
    }
    return selectedItems
      .map(
        (item) =>
          `${item.category}: ${item.title} (${item.subtitle}) x${item.quantity} = ${formatPrice(
            item.price * item.quantity,
            item.currency
          )}`
      )
      .join(" | ");
  }, [selectedItems]);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  };

  useEffect(() => {
    if (step === "details") {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="Congress registration"
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
            Early Bird Registration
            <span className="mt-2 block bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              Reserve your seat now
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
            Early bird prices are available for a limited time and will increase soon. Choose your tickets below.
          </p>
          <button
            type="button"
            onClick={() =>
              registrationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="mt-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/30"
          >
            Start registration
          </button>
        </div>
      </section>

      <div
        id="registration"
        ref={registrationRef}
        className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/40 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                    Step 1
                  </p>
                  <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    Choose your tickets
                  </h1>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">
                    Select the items you need and adjust quantities. Early Bird prices will increase soon.
                  </p>
                </div>
                <div className="rounded-2xl bg-orange-50 px-4 py-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">Selected</p>
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">{totalCount}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-orange-600">Early Bird Notice:</span> These prices are early bird rates and will increase soon. Secure your ticket today.
              </div>

              <div className="mt-8 space-y-6">
                {groupedItems.map(({ category, items }) => (
                  <div key={category} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      <h2 className="text-lg font-semibold text-slate-900">{category}</h2>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Early Bird
                      </span>
                    </div>
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition hover:border-orange-200 hover:bg-white sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                              {item.badge && (
                                <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-600">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-slate-600 sm:text-sm">{item.subtitle}</p>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <p className="text-sm font-semibold text-slate-900 sm:text-base">
                              {formatPrice(item.price, item.currency)}
                            </p>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
                                aria-label={`Decrease ${item.title}`}
                              >
                                −
                              </button>
                              <span className="min-w-[36px] text-center text-sm font-semibold text-slate-900">
                                {quantities[item.id] ?? 0}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-lg font-semibold text-orange-600 transition hover:border-orange-300 hover:bg-orange-100"
                                aria-label={`Increase ${item.title}`}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Total</p>
                  <div className="mt-1 flex flex-wrap gap-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {totals.EGP > 0 ? `${totals.EGP.toLocaleString()} EGP` : "0 EGP"}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {totals.USD > 0 ? `$${totals.USD.toLocaleString()}` : "$0"}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (totalCount === 0) return;
                    setIsContinuing(true);
                    if (step === "details") {
                      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                      window.setTimeout(() => setIsContinuing(false), 400);
                      return;
                    }
                    setStep("details");
                    window.setTimeout(() => setIsContinuing(false), 400);
                  }}
                  disabled={totalCount === 0 || isContinuing}
                  className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isContinuing ? "Loading form..." : "Continue to attendee details"}
                </button>
              </div>
            </div>

            {step === "details" && (
              <div
                ref={detailsRef}
                className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/40 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                      Step 2
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Attendee details</h2>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      Fill in your details and submit your registration. We&apos;ll contact you to confirm.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("selection")}
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-orange-200 hover:text-orange-600"
                  >
                    Edit selection
                  </button>
                </div>

                <form
                  action="https://formspree.io/f/xqelyvrz"
                  method="POST"
                  className="mt-8 grid gap-5"
                  onSubmit={() => setIsSubmitting(true)}
                >
                  <input type="hidden" name="Selected Items" value={selectionSummary} />
                  <input type="hidden" name="Total EGP" value={`${totals.EGP.toLocaleString()} EGP`} />
                  <input type="hidden" name="Total USD" value={`$${totals.USD.toLocaleString()}`} />
                  <input
                    type="hidden"
                    name="_cc"
                    value="mariam.gaber@stylishholidays.travel,mariam.ashraf@stylishholidays.travel,noha.kamal@stylishholidays.travel"
                  />

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

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-slate-700">Country</label>
                      <input
                        type="text"
                        name="Country"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                        placeholder="Country"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700">Hospital</label>
                      <input
                        type="text"
                        name="Hospital"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                        placeholder="Hospital / Organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">Comments to organizers</label>
                    <textarea
                      name="Comments"
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
                      placeholder="Let us know any special requests or notes."
                    />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Review Total
                      </p>
                      <div className="mt-1 flex flex-wrap gap-4">
                        <p className="text-sm font-semibold text-slate-900">
                          {totals.EGP.toLocaleString()} EGP
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          ${totals.USD.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Submitting..." : "Submit registration"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100/40 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">Your selection</h3>
              <p className="mt-2 text-sm text-slate-600">
                A live summary of your chosen items will appear here.
              </p>

              <div className="mt-6 space-y-4">
                {selectedItems.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
                    Select tickets on the left to see the summary.
                  </div>
                ) : (
                  selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        {item.category}: {item.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-600">{item.subtitle}</p>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-900">x{item.quantity}</span>
                        <span className="font-semibold text-orange-600">
                          {formatPrice(item.price * item.quantity, item.currency)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Totals</p>
                <div className="mt-2 space-y-1 text-sm font-semibold text-slate-900">
                  <p>{totals.EGP.toLocaleString()} EGP</p>
                  <p>${totals.USD.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-500 to-orange-400 p-6 text-white shadow-xl shadow-orange-200/50 sm:p-8">
              <h3 className="text-lg font-bold">Need assistance?</h3>
              <p className="mt-2 text-sm text-white/90">
                If you have questions about packages, hotel stays, or group registrations, mention it in the comments and we&apos;ll follow up quickly.
              </p>
              <div className="mt-4 rounded-2xl bg-white/15 px-4 py-3 text-xs font-semibold uppercase tracking-[0.25em]">
                Hurghada • 16 - 19 September 2026
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
