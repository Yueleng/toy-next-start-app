import Image from "next/image";
import Link from "next/link";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function UserInfoPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const { user } = session;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 py-24 px-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 transition-all">
        <div className="flex flex-col items-center gap-4 text-center">
          {user?.image && (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src={user.image}
                alt={user.name ?? "User avatar"}
                width={120}
                height={120}
                className="relative rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl"
                priority
              />
            </div>
          )}
          <div className="mt-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {user?.name}
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium mt-1">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-4" />

        <div className="grid grid-cols-1 gap-6 w-full">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/50">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Account Details
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-600 dark:text-zinc-400">Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Active
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Provider
                </span>
                <span className="text-zinc-900 dark:text-zinc-200 font-medium">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="mt-4 flex h-12 items-center justify-center px-8 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Back to Dashboard
        </Link>
      </main>
    </div>
  );
}
