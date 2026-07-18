import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import NationalFacultyManager from "./NationalFacultyManager";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminNationalFacultyPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/admin");
  }

  const facultyMembers = await prisma.nationalFaculty.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      country: true,
      title: true,
      photo: true,
    },
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-500 transition hover:text-orange-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Admin Portal
            </Link>
            <h1 className="mt-1 text-2xl font-semibold text-slate-950">
              National Faculty
            </h1>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <NationalFacultyManager facultyMembers={facultyMembers} />
      </section>
    </main>
  );
}
