import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { DockComponent } from "@/components/Dock";
import Footer from "@/components/Footer";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <FlickeringGrid
              className="z-0 absolute inset-0 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] "
              color="#34d399"
              flickerChance={0.1}
              gridGap={6}
              maxOpacity={0.5}
              squareSize={4}
            />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

            {/* Dock Component */}
            <DockComponent />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
