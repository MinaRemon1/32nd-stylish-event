"use server";

import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const MAX_PHOTO_SIZE = 2 * 1024 * 1024;

async function requireAdminUser() {
  const user = await currentUser();

  if (!user) {
    redirect("/admin");
  }

  return user;
}

function getRequiredText(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function getOptionalText(formData: FormData, key: string) {
  return getRequiredText(formData, key) || null;
}

async function readPhotoDataUrl(photo: FormDataEntryValue | null, required: boolean) {
  if (!(photo instanceof File) || photo.size === 0) {
    if (required) {
      throw new Error("Photo is required.");
    }

    return null;
  }

  if (!photo.type.startsWith("image/")) {
    throw new Error("Please upload an image file.");
  }

  if (photo.size > MAX_PHOTO_SIZE) {
    throw new Error("Please upload an image smaller than 2 MB.");
  }

  const buffer = Buffer.from(await photo.arrayBuffer());
  return `data:${photo.type};base64,${buffer.toString("base64")}`;
}

export async function addNationalFacultyMember(formData: FormData) {
  await requireAdminUser();

  const name = getRequiredText(formData, "name");
  const country = getOptionalText(formData, "country");
  const title = getOptionalText(formData, "title");
  const photoDataUrl = await readPhotoDataUrl(formData.get("photo"), true);

  if (!name || !photoDataUrl) {
    throw new Error("Photo and name are required.");
  }

  await prisma.nationalFaculty.create({
    data: {
      name,
      country,
      title,
      photo: photoDataUrl,
    },
  });

  revalidatePath("/admin/national-faculty");
  revalidatePath("/national-faculty");
}

export async function updateNationalFacultyMember(formData: FormData) {
  await requireAdminUser();

  const id = Number(formData.get("id"));
  const name = getRequiredText(formData, "name");
  const country = getOptionalText(formData, "country");
  const title = getOptionalText(formData, "title");
  const photoDataUrl = await readPhotoDataUrl(formData.get("photo"), false);

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid National Faculty profile.");
  }

  if (!name) {
    throw new Error("Name is required.");
  }

  await prisma.nationalFaculty.update({
    where: { id },
    data: {
      name,
      country,
      title,
      ...(photoDataUrl ? { photo: photoDataUrl } : {}),
    },
  });

  revalidatePath("/admin/national-faculty");
  revalidatePath("/national-faculty");
}

export async function deleteNationalFacultyMember(formData: FormData) {
  await requireAdminUser();

  const id = Number(formData.get("id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid National Faculty profile.");
  }

  await prisma.nationalFaculty.delete({
    where: { id },
  });

  revalidatePath("/admin/national-faculty");
  revalidatePath("/national-faculty");
}
