import type { Metadata } from "next";

import { fonts } from "@/lib/fonts";
import { Providers } from "@/lib/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Leonardo.ai - Technical challenge",
  description:
    "Software Engineering Challenge from Jeremy Grancher for the Front End Web Developer position at Leonardo.ai",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fonts.inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
