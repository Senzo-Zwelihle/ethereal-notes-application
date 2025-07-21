import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { ReactLenis } from "@/components/providers/_components/lenis";
import { ConvexClientProvider } from "@/components/providers/_components/convex";
import { EdgeStoreProvider } from "@/components/providers/_components/edgestore";
import { NextThemeProvider } from "@/components/providers/_components/next-themes";
import { ModalProvider } from "@/components/providers/_components/modal";

export const metadata: Metadata = {
  title: "Ethereal Notes Application",
  description: "Modern Note Taking Application",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/brand/ethereal-notes-logo-light.svg",
        href: "/assets/brand/ethereal-notes-logo-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/brand/ethereal-notes-logo-dark.svg",
        href: "/assets/brand/ethereal-notes-logo-dark.svg",
      },
    ],
  },
};

const polySansBulky = localFont({
  src: "./fonts/PolySans-Bulky.woff2",
  variable: "--font-polySansBulky",
  display: "swap",
});

const polySansMedian = localFont({
  src: "./fonts/PolySans-Median.woff2",
  variable: "--font-polySansMedian",
  display: "swap",
});

const polySans = localFont({
  src: "./fonts/PolySans-Neutral.woff2",
  variable: "--font-polySans",
  display: "swap",
});

const polySansSlim = localFont({
  src: "./fonts/PolySans-Slim.woff2",
  variable: "--font-polySansSlim",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.03,
        duration: 5,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        smoothWheel: true,
      }}
    >
      <ConvexClientProvider>
        <EdgeStoreProvider>
          <html lang="en" suppressHydrationWarning>
            <body
              className={`${polySansSlim.variable} ${polySans.variable} ${polySansMedian.variable} ${polySansBulky.variable} antialiased font-[family-name:var(--font-polySansSlim)]`}
            >
              <NextThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Toaster />
                <ModalProvider />
                {children}
              </NextThemeProvider>
            </body>
          </html>
        </EdgeStoreProvider>
      </ConvexClientProvider>
    </ReactLenis>
  );
}
