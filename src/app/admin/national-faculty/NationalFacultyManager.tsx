"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  CheckCircle2,
  ImagePlus,
  LoaderCircle,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  addNationalFacultyMember,
  deleteNationalFacultyMember,
  updateNationalFacultyMember,
} from "./actions";

type FacultyMember = {
  id: number;
  name: string;
  country: string;
  title: string;
  photo: string;
};

type NationalFacultyManagerProps = {
  facultyMembers: FacultyMember[];
};

export default function NationalFacultyManager({
  facultyMembers,
}: NationalFacultyManagerProps) {
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<FacultyMember | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [addError, setAddError] = useState("");
  const [editError, setEditError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [editingPendingId, setEditingPendingId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(""), 3000);
  };

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }

    return "Something went wrong. Please try again.";
  };

  const handleAddMember = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setAddError("");
    setIsAdding(true);

    try {
      await addNationalFacultyMember(formData);
      form.reset();
      setIsAddModalOpen(false);
      showToast("National Faculty member added successfully.");
    } catch (error) {
      setAddError(getErrorMessage(error));
    } finally {
      setIsAdding(false);
    }
  };

  const handleUpdateMember = async (
    event: FormEvent<HTMLFormElement>,
    memberId: number,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setEditError("");
    setEditingPendingId(memberId);

    try {
      await updateNationalFacultyMember(formData);
      setEditingId(null);
      showToast("National Faculty member updated successfully.");
    } catch (error) {
      setEditError(getErrorMessage(error));
    } finally {
      setEditingPendingId(null);
    }
  };

  const handleDeleteMember = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setDeleteError("");
    setIsDeleting(true);

    try {
      await deleteNationalFacultyMember(formData);
      setMemberToDelete(null);
      showToast("National Faculty member deleted successfully.");
    } catch (error) {
      setDeleteError(getErrorMessage(error));
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredMembers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return facultyMembers;
    }

    return facultyMembers.filter((member) =>
      [member.name, member.country, member.title].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [facultyMembers, query]);

  return (
    <>
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Current profiles
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-950">
                {facultyMembers.length} National Faculty member
                {facultyMembers.length === 1 ? "" : "s"}
              </h2>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-xl">
              <label className="relative block min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  placeholder="Search by name, country, or title"
                />
              </label>
              <button
                type="button"
                onClick={() => {
                  setAddError("");
                  setIsAddModalOpen(true);
                }}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
              >
                <Plus className="h-4 w-4" />
                Add member
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => {
              const isEditing = editingId === member.id;

              return (
                <div
                  key={member.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  {isEditing ? (
                    <form
                      onSubmit={(event) => handleUpdateMember(event, member.id)}
                      className="space-y-4"
                    >
                      <input type="hidden" name="id" value={member.id} />

                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-950">
                          Edit profile
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setEditError("");
                            setEditingId(null);
                          }}
                          disabled={editingPendingId === member.id}
                          className="rounded-md p-2 text-slate-500 transition hover:bg-white hover:text-slate-950"
                          aria-label="Cancel editing"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <label className="block">
                        <span className="text-xs font-medium text-slate-600">
                          Replace photo
                        </span>
                        <input
                          name="photo"
                          type="file"
                          accept="image/*"
                          disabled={editingPendingId === member.id}
                          className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-orange-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-orange-600"
                        />
                      </label>

                      <input
                        name="name"
                        required
                        defaultValue={member.name}
                        disabled={editingPendingId === member.id}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                        placeholder="Name"
                      />
                      <input
                        name="country"
                        required
                        defaultValue={member.country}
                        disabled={editingPendingId === member.id}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                        placeholder="Country"
                      />
                      <input
                        name="title"
                        required
                        defaultValue={member.title}
                        disabled={editingPendingId === member.id}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                        placeholder="Title"
                      />

                      {editError ? (
                        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                          {editError}
                        </p>
                      ) : null}

                      <button
                        type="submit"
                        disabled={editingPendingId === member.id}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300"
                      >
                        {editingPendingId === member.id ? (
                          <LoaderCircle className="h-4 w-4 animate-spin" />
                        ) : null}
                        {editingPendingId === member.id ? "Saving..." : "Save changes"}
                      </button>
                    </form>
                  ) : (
                    <>
                      <div className="text-center">
                        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white shadow-sm">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            unoptimized
                            className="object-cover object-center"
                          />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-slate-950">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-orange-600">
                          {member.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                          {member.country}
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditError("");
                            setEditingId(member.id);
                          }}
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:text-orange-600"
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDeleteError("");
                            setMemberToDelete(member);
                          }}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 bg-white px-3 py-2 text-sm font-semibold text-red-600 transition hover:border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })
          ) : (
            <p className="col-span-full rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm text-slate-500">
              {facultyMembers.length > 0
                ? "No National Faculty profiles match your search."
                : "No National Faculty profiles have been added yet."}
            </p>
          )}
        </div>
      </div>

      {isAddModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
          <form
            onSubmit={handleAddMember}
            className="max-h-[calc(100vh-3rem)] w-full max-w-lg overflow-y-auto rounded-lg border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/30 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  <ImagePlus className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                    Add member
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    Faculty profile
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setAddError("");
                  setIsAddModalOpen(false);
                }}
                disabled={isAdding}
                className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close add member modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Photo</span>
                <input
                  name="photo"
                  type="file"
                  accept="image/*"
                  required
                  disabled={isAdding}
                  className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-600"
                />
                <span className="mt-2 block text-xs text-slate-500">
                  JPG, PNG, or WebP. Maximum 2 MB.
                </span>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  name="name"
                  required
                  disabled={isAdding}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  placeholder="Prof. Full Name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Country</span>
                <input
                  name="country"
                  required
                  disabled={isAdding}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  placeholder="Egypt"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Title</span>
                <input
                  name="title"
                  required
                  disabled={isAdding}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  placeholder="Professor of Pediatric Gastroenterology"
                />
              </label>

              {addError ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {addError}
                </p>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setAddError("");
                    setIsAddModalOpen(false);
                  }}
                  disabled={isAdding}
                  className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAdding}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                >
                  {isAdding ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
                  {isAdding ? "Adding..." : "Add member"}
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}

      {memberToDelete ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
          <form
            onSubmit={handleDeleteMember}
            className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/30 sm:p-6"
          >
            <input type="hidden" name="id" value={memberToDelete.id} />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
                  Confirm delete
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">
                  Delete {memberToDelete.name}?
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  This will remove the member from the admin portal and the public National Faculty page.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMemberToDelete(null)}
                disabled={isDeleting}
                className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close delete confirmation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {deleteError ? (
              <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {deleteError}
              </p>
            ) : null}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMemberToDelete(null)}
                disabled={isDeleting}
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isDeleting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                {isDeleting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
                {isDeleting ? "Deleting..." : "Delete member"}
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {toastMessage ? (
        <div className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-center gap-3 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-xl shadow-slate-950/10">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
          <span>{toastMessage}</span>
        </div>
      ) : null}
    </>
  );
}
