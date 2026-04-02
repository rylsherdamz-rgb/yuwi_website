import Image from "next/image";
import Reveal from "./_components/reveal";

const features = [
  {
    title: "Scan notes fast",
    body: "Capture handwritten notes, printed pages, and study sheets straight from your phone camera.",
  },
  {
    title: "Read PDFs clearly",
    body: "Pull text from dense PDFs so you can turn source material into something easier to study.",
  },
  {
    title: "Make quizzes instantly",
    body: "Use Gemini to turn your text into simple review questions with adjustable difficulty.",
  },
  {
    title: "Stay organized",
    body: "Keep your quiz history locally and jump back into review without rebuilding everything.",
  },
] as const;

const steps = [
  "Add notes, images, or a PDF.",
  "Review and clean the extracted text.",
  "Choose quiz count and difficulty.",
  "Study with a cleaner review flow.",
] as const;

const roadmap = [
  {
    stage: "V2",
    title: "TTS reviewer with voice playback",
    body: "Add text-to-speech to the reviewer so quizzes can be read aloud, making hands-free review and listening practice much easier.",
  },
  {
    stage: "V2",
    title: "Public quiz sharing",
    body: "Let users publish quiz sets with shareable links so classmates, friends, or communities can open and study the same material.",
  },
  {
    stage: "V2",
    title: "Saved quiz library and collections",
    body: "Organize created quizzes into folders, subjects, and recent sets so it is easier to revisit study material over time.",
  },
  {
    stage: "V2",
    title: "Smarter review modes",
    body: "Expand beyond the basic flow with shuffle, retry-wrong-answers, timed sessions, and progress tracking across review sessions.",
  },
  {
    stage: "V2",
    title: "Better import and cleanup",
    body: "Improve OCR cleanup, PDF parsing, and source text editing so the generated quizzes start from cleaner study material.",
  },
  {
    stage: "V2",
    title: "Stronger onboarding and feedback",
    body: "Polish first-run guidance, empty states, loading feedback, and error handling so the app feels more dependable for daily use.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[var(--accent-glow)] blur-3xl" />
          <div className="absolute right-[-5rem] top-24 h-64 w-64 rounded-full bg-[var(--accent-soft)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(240,138,52,0.15),transparent_55%)]" />
        </div>

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
          <header className="animate-fade-up flex items-center justify-between rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.68)] px-4 py-3 shadow-[0_12px_40px_rgba(43,30,24,0.06)] backdrop-blur md:px-6 dark:bg-[rgba(33,24,18,0.7)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1.5">
                <Image
                  src="/yuwi-icon.png"
                  alt="Yuwi app icon"
                  width={36}
                  height={36}
                  className="rounded-xl"
                  priority
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-brand)] text-lg font-extrabold tracking-tight">
                  Yuwi
                </p>
                <p className="text-xs text-[var(--muted)]">Study, simplified.</p>
              </div>
            </div>

            <a
              href="#download"
              className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get the app
            </a>
          </header>

          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div className="max-w-2xl">
              <Reveal>
              <div className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]">
                Built for notes, PDFs, and quiz review
              </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 font-[family-name:var(--font-brand)] text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  Turn study clutter into a cleaner review flow.
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                  Yuwi helps you scan notes, read PDFs, and turn source material into simple quizzes that are easier to review on your phone.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(240,138,52,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Download Yuwi
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--card)] px-6 py-4 text-base font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface)]"
                >
                  See how it works
                </a>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Reveal delay={120}>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_18px_40px_rgba(43,30,24,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-[var(--muted)]">Input</p>
                  <p className="mt-2 text-lg font-bold">Photos, notes, PDFs</p>
                </div>
                </Reveal>
                <Reveal delay={180}>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_18px_40px_rgba(43,30,24,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-[var(--muted)]">Output</p>
                  <p className="mt-2 text-lg font-bold">Simple review quizzes</p>
                </div>
                </Reveal>
                <Reveal delay={240}>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_18px_40px_rgba(43,30,24,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-[var(--muted)]">Storage</p>
                  <p className="mt-2 text-lg font-bold">Local-first history</p>
                </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={120} className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-x-10 top-10 h-[28rem] rounded-full bg-[var(--accent-soft)] blur-3xl" />
              <div className="animate-float relative w-full max-w-[430px] rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,245,235,0.88))] p-4 shadow-[0_30px_90px_rgba(43,30,24,0.12)] dark:bg-[linear-gradient(180deg,rgba(33,24,18,0.98),rgba(42,30,23,0.95))]">
                <div className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--card)] p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/yuwi-icon.png"
                        alt="Yuwi icon"
                        width={48}
                        height={48}
                        className="rounded-2xl"
                      />
                      <div>
                        <p className="font-[family-name:var(--font-brand)] text-2xl font-black tracking-tight">
                          Yuwi
                        </p>
                        <p className="text-sm text-[var(--muted)]">Study quiz app</p>
                      </div>
                    </div>
                    <div className="rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      Live flow
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.4rem] bg-[var(--surface)] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      Today with Yuwi
                    </p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight">
                      Scan. Read. Quiz. Review.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      A softer, clearer way to move from source material to review without bouncing between separate tools.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {steps.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-4 rounded-[1.2rem] border border-[var(--border)] bg-[var(--card)] px-4 py-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-muted)] text-sm font-black text-[var(--accent-strong)]">
                          {index + 1}
                        </div>
                        <p className="text-sm font-semibold leading-6">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-10 lg:px-12">
        <Reveal>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-10 shadow-[0_22px_60px_rgba(43,30,24,0.06)] sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Core features
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-brand)] text-4xl font-black tracking-[-0.04em]">
              Built for the actual study workflow.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="h-2 w-12 rounded-full bg-[var(--accent)]" />
                <h3 className="mt-5 text-xl font-black tracking-tight">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--foreground)] px-8 py-10 text-[var(--background)]">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent)]">
              Privacy
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-brand)] text-4xl font-black tracking-[-0.04em]">
              Keep your study flow local-first.
            </h2>
            <p className="mt-4 text-base leading-7 text-[rgba(255,249,242,0.76)]">
              Yuwi stores quiz history and app state locally, keeps setup straightforward, and gives you a cleaner path from capture to review.
            </p>
          </div>
          </Reveal>

          <Reveal delay={100}>
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-8 py-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Why it feels different
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-black tracking-tight">Less clutter</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The product language is intentionally simple so first-time users can understand the flow fast.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">Warmer UI</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The visual system pulls from the icon itself, using cream, orange, and brown tones instead of generic startup gradients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">Mobile-first</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Built around camera, gallery, and quick review moments that make sense on a phone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight">Focused review</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  The goal is not more screens. It is a cleaner path from source material to memory.
                </p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-10 lg:px-12">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--accent-border)] bg-[var(--accent-muted)] px-8 py-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Gemini note
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-brand)] text-3xl font-black tracking-[-0.04em]">
              Quiz generation depends on the Gemini API.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">
              Yuwi uses your Gemini API key to create quizzes from notes, images, and PDFs. That means generation is still limited by the API access and usage tied to the key you are using. Switching keys does not make quiz generation truly unlimited. It only changes which Gemini account and quota the requests go through.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="roadmap" className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-10 lg:px-12">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] px-6 py-10 shadow-[0_22px_60px_rgba(43,30,24,0.06)] sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                V2 roadmap
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-brand)] text-4xl font-black tracking-[-0.04em]">
                What Yuwi v2 is planned to add.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                The next version is focused on better review depth, easier sharing, and a more polished day-to-day study experience.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {roadmap.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--card),var(--surface))] p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="absolute right-[-1rem] top-[-1rem] h-24 w-24 rounded-full bg-[var(--accent-soft)] blur-2xl" />
                    <div className="relative">
                      <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                        {item.stage}
                      </p>
                      <h3 className="mt-4 text-2xl font-black tracking-tight">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="download" className="mx-auto w-full max-w-7xl px-6 pb-16 pt-4 sm:px-10 lg:px-12">
        <Reveal>
        <div className="rounded-[2.2rem] border border-[var(--accent-border)] bg-[linear-gradient(135deg,var(--accent-muted),rgba(255,255,255,0.92))] px-8 py-10 shadow-[0_24px_70px_rgba(240,138,52,0.14)] dark:bg-[linear-gradient(135deg,rgba(56,39,31,0.92),rgba(33,24,18,0.96))]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                Download Yuwi
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-brand)] text-4xl font-black tracking-[-0.04em]">
                Study from what you already have.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                If your notes already exist in photos, screenshots, or PDFs, Yuwi helps turn them into a smoother quiz workflow.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://github.com/rylsherdamz-rgb/yuwi_website/releases/download/v1.0/Yuwi-StudyPartner.apk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-4 text-base font-bold text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Download APK
                </a>
                <a
                  href="mailto:richiechristiandeguzman11@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--card)] px-6 py-4 text-base font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--surface)]"
                >
                  Contact
                </a>
              </div>
              <p className="text-sm font-semibold text-[var(--muted)]">
                Google Play Store release is coming soon.
              </p>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </main>
  );
}
