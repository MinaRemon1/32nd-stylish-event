"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
  const eventDate = new Date("2026-01-20T09:00:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const lastScrollY = useRef(0);

  /* ================= Countdown ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  /* ================= Navbar Scroll Logic ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false); // scrolling down
      } else {
        setIsNavVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* ================= Background ================= */}
      <Image
        src="/hero.jpg"
        alt="Medical Congress"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />

      {/* ================= Navbar ================= */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out
        ${isNavVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-black/50 backdrop-blur-xl shadow-lg" : "bg-transparent"}
      `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo2.png"
              width={75}
              height={20}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>
      </nav>

      {/* ================= Hero Content ================= */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white pt-24">
        <span className="mb-4 rounded-full border border-white/30 px-4 py-1 text-sm tracking-wide text-white/80">
          16 - 19 September 2026, Hurghada
        </span>

        <h1 className="max-w-5xl text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
          32nd International Congress Of
          <span className="block bg-gradient-to-r font-bold from-orange-400 to-orange-300 bg-clip-text text-transparent">
            Pediatric Hepatology, Gastroenterology & Nutrition
          </span>
        </h1>


        {/* <p className="mt-6 max-w-2xl text-lg text-white/80">
          Join leading physicians, researchers, and healthcare innovators for a
          world-class scientific experience.
        </p> */}

        {/* Countdown */}
        <div className="mt-12 grid grid-cols-4 gap-4 sm:gap-6">
          <CountdownItem label="Days" value={timeLeft.days} />
          <CountdownItem label="Hours" value={timeLeft.hours} />
          <CountdownItem label="Minutes" value={timeLeft.minutes} />
          <CountdownItem label="Seconds" value={timeLeft.seconds} />
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <h1 className="rounded-full bg-gradient-to-r font-[700] from-orange-500 to-orange-400 px-8 py-4 text-base font-medium text-white transition hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/30">
            Coming Soon
          </h1>
        </div>
        
      </div>
    </section>
  );
}

/* ================= Countdown Item ================= */
function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex min-w-[72px] flex-col items-center rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
      <span className="text-3xl font-semibold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs uppercase tracking-widest text-white/70">
        {label}
      </span>
    </div>
  );
}
