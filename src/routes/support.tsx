export function SupportPage() {
  return (
    <main className="min-h-[70svh] bg-background px-5 pb-20 pt-32 sm:px-8 md:px-12 md:pb-28 md:pt-40">
      <section className="max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50">
          Soporte
        </p>
        <h1 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
          Estamos para ayudarte.
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-foreground/70 sm:text-xl">
          Si tienes preguntas, dudas o cualquier contacto, envía un correo a{' '}
          <a
            href="mailto:contacto@gettaply.xyz"
            className="font-medium text-foreground underline decoration-[#72c888] decoration-2 underline-offset-4 transition hover:text-[#4c9d62]"
          >
            contacto@gettaply.xyz
          </a>
          .
        </p>
      </section>
    </main>
  );
}
