type FoundationPageProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function FoundationPage({ title, eyebrow, description }: FoundationPageProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center gap-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <div className="space-y-4">
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
            {description}
          </p>
        </div>
        <div className="h-1 w-24 rounded-full bg-sage" />
      </section>
    </main>
  );
}
