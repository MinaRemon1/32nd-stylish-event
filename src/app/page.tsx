"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Baby, LeafyGreen, HeartPulse, SquareActivity, Microscope, ShieldPlus, Activity, BriefcaseMedical } from 'lucide-react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface Speaker {
  id: number;
  name: string;
  title: string;
  affiliation: string;
  photo: string;
  topics: string[];
}

export default function Home() {
  // Use useMemo to memoize the event date
  const eventDate = useMemo(() => new Date("2026-09-16T09:00:00"), []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeSpeaker, setActiveSpeaker] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const venueRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Prof. Carlos Lifschitz",
      title: "Pediatric Nutrition & Gastroenterology Expert",
      affiliation: "Argentina",
      photo: "/speaker1.png",
      topics: ["NAFLD in Children", "Liver Transplantation"],
    },
    {
      id: 2,
      name: "Prof. Elizabeth Tayler",
      title: "Public Health Expert",
      affiliation: "United Kingdom",
      photo: "/speaker2.png",
      topics: ["IBD Management", "Nutritional Therapy"],
    },
    {
      id: 3,
      name: "Prof. Abdullah Shamsah",
      title: "Pediatric and Emergency Expert",
      affiliation: "Kuwait",
      photo: "/speaker3.png",
      topics: ["Enteral Nutrition", "Growth Failure"],
    },
  ];

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

  /* ================= Scroll Logic ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setShowBackToTop(currentScrollY > 500);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false);
        // Close mobile menu on scroll down
        setIsMobileMenuOpen(false);
      } else {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Fixed: Type-safe scroll function
  const scrollToSection = (section: 'about' | 'speakers' | 'program' | 'venue') => {
    const refs = {
      about: aboutRef.current,
      speakers: speakersRef.current,
      program: programRef.current,
      venue: venueRef.current,
    };
    
    refs[section]?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* ================= Back to Top Button ================= */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-400 p-3 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Back to top"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* ================= Hero Section ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <Image
          src="/hero2.jpg"
          alt="Medical Congress"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]" />

        {/* Navbar */}
        <nav
          className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out
            ${isNavVisible ? "translate-y-0" : "-translate-y-full"}
            ${isScrolled || isMobileMenuOpen ? "bg-white shadow-lg" : "bg-transparent"}
          `}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo2.png"
                width={60}
                height={16}
                alt="logo"
                className="object-contain sm:w-75"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium tracking-wide transition hover:text-orange-500 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('speakers')}
                className={`text-sm font-medium tracking-wide transition hover:text-orange-500 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection('program')}
                className={`text-sm font-medium tracking-wide transition hover:text-orange-500 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                Topics
              </button>
              <button
                onClick={() => scrollToSection('venue')}
                className={`text-sm font-medium tracking-wide transition hover:text-orange-500 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                Venue
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className={`md:hidden text-2xl transition-transform duration-300 ${
                isScrolled || isMobileMenuOpen ? "text-slate-800" : "text-white"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            ref={mobileMenuRef}
            className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-3 sm:px-6">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-sm font-medium text-slate-800 hover:text-orange-500 py-2 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('speakers')}
                className="block w-full text-left text-sm font-medium text-slate-800 hover:text-orange-500 py-2 transition-colors"
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection('program')}
                className="block w-full text-left text-sm font-medium text-slate-800 hover:text-orange-500 py-2 transition-colors"
              >
                Topics
              </button>
              <button
                onClick={() => scrollToSection('venue')}
                className="block w-full text-left text-sm font-medium text-slate-800 hover:text-orange-500 py-2 transition-colors"
              >
                Venue
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white pt-20 sm:pt-24 sm:px-6">
          <span className="mb-4 rounded-full border border-white/30 px-3 py-1 text-xs sm:text-sm tracking-wide text-white/80 sm:px-4">
            16 - 19 September 2026, Hurghada
          </span>

          <h1 className="max-w-5xl text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="inline-flex items-start">
              <span className="text-white">32</span>
              <sup className="ml-0.5 text-lg leading-none text-white/70 sm:text-xl md:text-2xl">
                nd
              </sup>
            </span>{" "}
            International Congress Of
            <span className="block bg-gradient-to-r font-bold from-orange-400 to-orange-300 bg-clip-text text-transparent mt-2">
              Pediatric Hepatology, Gastroenterology & Nutrition
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base sm:mt-6 md:text-lg">
            Join global experts to advance pediatric care through innovation, collaboration, and excellence.
          </p>

          {/* Countdown */}
          <div className="mt-8 sm:mt-12 grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            <CountdownItem label="Days" value={timeLeft.days} />
            <CountdownItem label="Hours" value={timeLeft.hours} />
            <CountdownItem label="Minutes" value={timeLeft.minutes} />
            <CountdownItem label="Seconds" value={timeLeft.seconds} />
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#register"
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/30 sm:px-8 sm:py-4 sm:text-base"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-6 w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section ref={aboutRef} className="py-16 bg-white sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 sm:px-4 sm:py-2 sm:text-sm">
                Welcome Message
              </span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                32nd International Congress
                <span className="block text-orange-500 mt-2">Advancing Pediatric Care</span>
              </h2>
              
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
                <p>
                  On behalf of the International Congress of Pediatric Hepatology, Gastroenterology and Nutrition (ICPHGN) board, we are honored to extend a warm invitation to the 32nd ICPHGN, taking place in the beautiful coastal city of Hurghada, Egypt from 16 - 19 September 2026.
                </p>
                <p>
                  This prestigious congress continues its legacy as the premier global platform uniting leading specialists, researchers, and clinicians in pediatric hepatology, gastroenterology, and nutrition. Over three decades, we have fostered groundbreaking collaboration and education that transforms pediatric care worldwide.
                </p>
                <p>
                  Our 2026 scientific program features an exceptional lineup of international experts presenting cutting-edge research, innovative clinical practices, and transformative educational sessions. From advanced surgical techniques to nutritional breakthroughs, the congress addresses the most pressing challenges in pediatric GI health.
                </p>
                <p>
                  Beyond the scientific program, Hurghada offers the perfect setting for professional networking and cultural exchange. As the &quot;Golden Capital of the Red Sea,&quot; this premier destination provides an inspiring backdrop for rekindling professional relationships and establishing new collaborations.
                </p>
                <p className="font-medium">
                  We eagerly anticipate welcoming you to Hurghada for what promises to be an enriching, productive, and memorable congress experience.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 sm:text-2xl">
                Congress <span className="text-orange-500">Statistics</span>
              </h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: "30+", label: "Sessions", icon: <PresentationIcon /> },
                  { number: "100+", label: "Speakers", icon: <SpeakerIcon /> },
                  { number: "15+", label: "Topics", icon: <TopicsIcon /> },
                  { number: "10+", label: "Workshops", icon: <WorkshopIcon /> },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-300 sm:rounded-2xl sm:p-6"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="rounded-lg bg-gradient-to-r from-orange-100 to-orange-50 p-2 group-hover:scale-110 transition-transform sm:p-3">
                        <div className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6">
                          {stat.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">{stat.number}</div>
                        <div className="mt-0.5 text-xs font-medium text-slate-700 sm:text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Key Objectives */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 sm:mt-12 sm:rounded-2xl sm:p-8">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3 sm:text-xl">
                  <div className="rounded-lg bg-gradient-to-r from-orange-100 to-orange-50 p-2">
                    <TargetIcon />
                  </div>
                  Key Objectives
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Advance global collaboration in pediatric gastroenterology and hepatology",
                    "Share cutting-edge research and innovative clinical practices",
                    "Foster interdisciplinary networking among international experts",
                    "Enhance education in pediatric nutrition and digestive health",
                    "Bridge regional and global expertise for improved patient outcomes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700 sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Speakers Section ================= */}
      <section ref={speakersRef} className="py-16 bg-gradient-to-b from-white to-slate-50 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 sm:px-4 sm:py-2 sm:text-sm">
              World-Class Faculty
            </span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Meet Our <span className="text-orange-500">Distinguished Speakers</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 sm:mt-4 sm:text-base md:text-lg">
              Learn from the world&apos;s leading experts in pediatric hepatology, gastroenterology, and nutrition.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-orange-300 hover:shadow-xl sm:rounded-2xl sm:p-6 ${
                  activeSpeaker === speaker.id ? "border-orange-400 shadow-lg" : ""
                }`}
                onMouseEnter={() => setActiveSpeaker(speaker.id)}
                onMouseLeave={() => setActiveSpeaker(null)}
              >
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full sm:h-40 sm:w-40 md:h-48 md:w-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 to-transparent" />
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    className="object-cover p-2"
                  />
                </div>
                <div className="mt-4 text-center sm:mt-6">
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{speaker.name}</h3>
                  <p className="mt-1 font-medium text-orange-600 text-sm sm:text-base">{speaker.title}</p>
                  <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">{speaker.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Topics Section ================= */}
      <section ref={programRef} className="py-16 bg-white sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 sm:px-4 sm:py-2 sm:text-sm">
              Scientific Program
            </span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Congress <span className="text-orange-500">Topics</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 sm:mt-4 sm:text-base md:text-lg">
              Comprehensive coverage of the latest advancements in pediatric hepatology, gastroenterology and nutrition.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Liver Disease",
                description: "Genetic-metabolic, congenital and anatomical etiologies.",
                icon: <BriefcaseMedical className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "Gastrointestinal Disorders",
                description: "Congenital, anatomical and functional disorders.",
                icon: <Activity className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "Infant & Child Nutrition",
                description: "Normal developmental nutrition requirements.",
                icon: <Baby className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "Nutritional Disorders",
                description: "Under-nutrition, over-nutrition and malnutrition.",
                icon: <LeafyGreen className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "Portal Hypertension",
                description: "Hepatic vascular disorders management.",
                icon: <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "Hepato-biliary Surgery",
                description: "Advanced surgical techniques and transplantation.",
                icon: <SquareActivity className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "GI & Hepatic Immunity",
                description: "System immunity and autoimmune conditions.",
                icon: <ShieldPlus className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
              {
                title: "Human Microbiome",
                description: "Gut microbiome research and clinical applications.",
                icon: <Microscope className="h-5 w-5 sm:h-6 sm:w-6" />,
              },
            ].map((topic, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-orange-300 sm:rounded-2xl sm:p-6"
              >
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100 sm:-right-6 sm:-top-6 sm:h-24 sm:w-24" />
                <div className="relative">
                  <div className="mb-3 inline-flex rounded-lg bg-gradient-to-r from-orange-100 to-orange-50 p-2 group-hover:scale-110 transition-transform sm:mb-4 sm:p-3">
                    <div className="text-orange-600">
                      {topic.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5 sm:text-lg sm:mb-2">{topic.title}</h3>
                  {topic.description && (
                    <p className="text-xs text-slate-600 sm:text-sm">{topic.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Venue Section ================= */}
      <section ref={venueRef} className="py-16 bg-gradient-to-b from-white to-slate-50 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <span className="rounded-full bg-gradient-to-r from-orange-100 to-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 sm:px-4 sm:py-2 sm:text-sm">
                Venue & Location
              </span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                Continental Hotel <span className="text-orange-500">Hurghada</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:mt-6 sm:text-lg">
                Located on the beautiful Red Sea coast, the Continental Hotel Hurghada offers state-of-the-art facilities in a breathtaking setting. Perfect for combining professional development with relaxation in one of Egypt&apos;s premier tourist destinations.
              </p>
              
              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 p-2 sm:p-3">
                    <CalendarIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Dates</h4>
                    <p className="text-slate-700 text-sm sm:text-base">16 - 19 September 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 p-2 sm:p-3">
                    <LocationIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Location</h4>
                    <p className="text-slate-700 text-sm sm:text-base">Continental Hotel Hurghada</p>
                    <p className="text-slate-600 text-sm sm:text-base">Red Sea Governorate, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 p-2 sm:p-3">
                    <UsersIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Facilities</h4>
                    <p className="text-slate-700 text-sm sm:text-base">Conference halls, breakout rooms</p>
                    <p className="text-slate-600 text-sm sm:text-base">Hotel accommodation, dining options</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg sm:rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.840002661742!2d33.824742975593196!3d27.161323849362223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145280c3b84f28d3%3A0x6c0c82b597202ad4!2sContinental%20Hotel%20Hurghada!5e0!3m2!1sen!2seg!4v1766707178462!5m2!1sen!2seg"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Continental Hotel Hurghada Location"
                  className="w-full sm:h-[350px] md:h-[400px] lg:h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="border-t border-slate-200 bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
            <div>
              <Image
                src="/logo2.png"
                width={80}
                height={24}
                alt="Congress Logo"
                className="object-contain sm:w-100"
              />
              <p className="mt-3 max-w-md text-xs text-slate-600 sm:mt-4 sm:text-sm">
                32nd International Congress of Pediatric Hepatology, Gastroenterology & Nutrition
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-xs font-medium text-slate-700 hover:text-orange-500 transition-colors sm:text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('speakers')}
                className="text-xs font-medium text-slate-700 hover:text-orange-500 transition-colors sm:text-sm"
              >
                Speakers
              </button>
              <button
                onClick={() => scrollToSection('program')}
                className="text-xs font-medium text-slate-700 hover:text-orange-500 transition-colors sm:text-sm"
              >
                Topics
              </button>
              <button
                onClick={() => scrollToSection('venue')}
                className="text-xs font-medium text-slate-700 hover:text-orange-500 transition-colors sm:text-sm"
              >
                Venue
              </button>
            </div>
          </div>
          
          <div className="mt-6 border-t border-slate-200 pt-6 text-center sm:mt-8 sm:pt-8">
            <p className="text-xs text-slate-500 sm:text-sm">
              © 2026 32nd International Congress of Pediatric Hepatology, Gastroenterology & Nutrition. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= Countdown Item ================= */
function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex min-w-[60px] flex-col items-center rounded-lg border border-white/20 bg-white/10 px-2 py-2 backdrop-blur-md sm:min-w-[72px] sm:rounded-xl sm:px-4 sm:py-3">
      <span className="text-xl font-semibold tabular-nums text-white sm:text-2xl md:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-white/90 sm:mt-1 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

/* ================= Custom SVG Icons ================= */
function CalendarIcon() {
  return (
    <svg 
      className="h-4 w-4 text-orange-600 sm:h-5 sm:w-5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg 
      className="h-4 w-4 text-orange-600 sm:h-5 sm:w-5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg 
      className="h-4 w-4 text-orange-600 sm:h-5 sm:w-5" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0a4 4 0 110 5.292"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="h-4 w-4 text-orange-600 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

/* ================= Statistics Icons ================= */
function PresentationIcon() {
  return (
    <svg className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function TopicsIcon() {
  return (
    <svg className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function WorkshopIcon() {
  return (
    <svg className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}