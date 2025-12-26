import Link from "next/link";

export default function NotFoundPage() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/users", label: "Users" },
  ];

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div
        aria-hidden
        className="absolute -left-10 top-[-10%] h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-10 bottom-[-10%] h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-14">
        <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_120px_rgba(0,0,0,0.35)] backdrop-blur">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100 ring-1 ring-white/15">
            Lost signal
          </p>
          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-black leading-none">404</span>
            <span className="text-sm uppercase tracking-[0.25em] text-slate-200/80">
              Page not found
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            This page drifted off the map.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-200/80">
            We charted the routes and couldn&apos;t spot the destination you
            requested. Choose a path below or head back to the main hub.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-900/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              ← Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <aside className="flex max-w-sm flex-1 flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100 shadow-[0_15px_80px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-200/70">
              Quick links
            </p>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100 ring-1 ring-emerald-300/20">
              Recommended
            </span>
          </div>
          <ul className="grid gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  <span className="text-base font-medium">{link.label}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-indigo-100 transition group-hover:translate-x-1">
                    → Go
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-6 text-slate-200/70">
            Still stuck?{" "}
            <Link
              href="/contact"
              className="font-semibold text-indigo-100 underline"
            >
              Send a note
            </Link>{" "}
            and we&apos;ll help you find what you need.
          </p>
        </aside>
      </main>
    </div>
  );
}
