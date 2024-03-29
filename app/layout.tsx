import "./globals.css";
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

import { Inter, Roboto } from "next/font/google";
import Script from "next/script";

import type { Metadata } from "next";
import { Nav } from "./components/nav";

import { ThemeProvider } from "@/app/theme-provider";
import { Web3ModalProvider } from "./web3modal-provider";
import { LensProvider } from "./lens-provider";

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const metadata: Metadata = {
  title: "Lens Blog",
  description: "Blogging on the Lens Protocol",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${roboto.className} bg-background relative`}>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Web3ModalProvider>
            <LensProvider>
              <Nav />
              {children}
            </LensProvider>
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
