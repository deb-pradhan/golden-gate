import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Gate | Real Yield Stablecoin",
  description: "The world's first real-yield stablecoin ecosystem — a monetary layer designed for the emerging Internet of Value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-surface-canvas text-ink-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-border-default mt-16 py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-ink-tertiary">
                © 2026 Golden Gate Protocol
              </p>
              <p className="text-sm text-ink-tertiary font-mono">
                Real Yield. Real Money.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
