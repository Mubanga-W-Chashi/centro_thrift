import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const sprintItems = [
  "Next.js App Router",
  "TypeScript strict mode",
  "Tailwind CSS",
  "Prisma + PostgreSQL",
  "Auth.js / NextAuth",
  "Service and repository folders",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto grid min-h-screen max-w-6xl content-center gap-12 px-6 py-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Sprint 1 scaffold
          </p>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-7xl">
              Centro Thrift
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              A warm, curated thrift-commerce foundation for one-off inventory,
              WhatsApp reservations, staff operations, and scheduled delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={ROUTES.shop}
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Shop foundation
            </Link>
            <Link
              href={ROUTES.admin}
              className="rounded-xl border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-surface"
            >
              Admin foundation
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white/55 p-5 shadow-sm">
          <h2 className="font-serif text-2xl text-foreground">Ready for Sprint 2</h2>
          <div className="mt-5 grid gap-3">
            {sprintItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
              >
                <span className="text-sm font-medium text-foreground">{item}</span>
                <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-semibold text-accent-dark">
                  Set
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
