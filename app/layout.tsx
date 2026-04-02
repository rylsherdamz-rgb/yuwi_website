import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import ThemeToggle from "./_components/theme-toggle";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const brandFont = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Yuwi",
  description: "Turn notes, photos, and PDFs into simple quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${brandFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const storageKey = "yuwi-theme";
                const storedTheme = localStorage.getItem(storageKey);
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
        <div className="pointer-events-none fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
          <div className="pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
