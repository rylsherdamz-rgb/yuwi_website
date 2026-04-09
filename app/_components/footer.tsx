import Reveal from "./reveal";

const socialLinks = [
  {
    label: "Portfolio",
    href: "https://richie-christian-de-guzman.vercel.app/",
  },
  {
    label: "GitHub",
    href: "https://github.com/rylsherdamz-rgb?tab=overview&from=2026-01-01&to=2026-01-12",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/richie-christian-de-guzman-53b015392",
  },
] as const;

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-8 sm:pb-10 lg:px-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--footer-top),var(--footer-bottom))] px-5 py-7 shadow-[0_22px_60px_rgba(43,30,24,0.06)] sm:rounded-[2rem] sm:px-8 sm:py-8">
          <div className="absolute bottom-[-4rem] right-[-3rem] h-32 w-32 rounded-full bg-[var(--accent-soft)] blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                Built by Richie Christian De Guzman
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-brand)] text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Find the project, the profile, and the person behind Yuwi.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                Yuwi is part of a broader product and design practice focused on making software feel clearer, calmer, and easier to use.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
