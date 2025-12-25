import type { Metadata } from "next";
import { headers } from "next/headers";
import ContactButton from "./button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for product strategy, UI/UX, engineering, and support. Browse recent client chatter and reach the team quickly.",
  openGraph: {
    title: "Contact the Cumulus Studio team",
    description:
      "Reach out for collaborations, projects, and support with a fast response time.",
    url: "/contact",
  },
};

async function makePostRequest() {
  const host = (await headers()).get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;

  const response = await fetch(`${baseUrl}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello from client!" }),
  });

  if (!response.ok) {
    throw new Error(`POST /api/hello failed: ${response.status}`);
  }

  const data = await response.json();

  return { data };
}

export default async function DummyList() {
  const listOfDummys: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[] = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );

  const { data } = await makePostRequest();
  console.log("Response from /api/hello:", data);

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-indigo-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <section className="grid gap-8 rounded-2xl bg-white/80 p-8 shadow-xl ring-1 ring-slate-200 backdrop-blur md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-100">
              We respond in under 24 hours
            </p>
            <h1 className="text-4xl font-bold text-slate-900">
              Let&apos;s build something great together.
            </h1>
            <p className="text-lg leading-7 text-slate-700">
              Tell us about your project, partnership idea, or just say hello.
              We&apos;ll follow up quickly with next steps and a dedicated point
              of contact.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <ContactButton label="Contact Us" />
              <span className="text-sm text-slate-500">
                Prefer email?{" "}
                <a
                  className="text-indigo-600 underline"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">
                Product strategy
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                UI/UX design
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                Engineering
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                Support
              </span>
            </div>
          </div>
          <div className="space-y-4 rounded-xl bg-slate-900 p-6 text-slate-100 shadow-lg">
            <h2 className="text-xl font-semibold">What to expect</h2>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden
                />
                A short intro call to understand your goals.
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden
                />
                Clear timeline and pricing tailored to your needs.
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden
                />
                Dedicated team with weekly progress updates.
              </li>
            </ul>
            <div className="rounded-lg bg-slate-800 p-4 text-sm text-slate-200">
              <p className="font-semibold text-white">Office hours</p>
              <p>Mon–Fri · 9am–6pm PST</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-indigo-700">
                Recent posts from clients
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                What people are talking about
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {listOfDummys.slice(0, 6).map((dummy) => (
              <article
                key={dummy.id}
                className="group rounded-xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  User #{dummy.userId}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
                  {dummy.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {dummy.body}
                  {data.received.message}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
