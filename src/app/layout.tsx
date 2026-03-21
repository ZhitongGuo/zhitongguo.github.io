import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Zhitong (Payton) Guo",
  description:
    "Software Engineer at Meta, building infrastructure for large-scale AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="font-[family-name:var(--font-source-sans)]">
        {children}
      </body>
    </html>
  );
}
