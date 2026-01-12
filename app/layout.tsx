import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nicolas Contreras Castellano | Data Systems & Product Engineer",
    template: "%s | Nicolas Contreras Castellano",
  },
  description:
    "End-to-end data and automation systems for enterprise decisions, from pipelines and SQL logic to dashboards and web delivery.",
  openGraph: {
    title: "Nicolas Contreras Castellano",
    description:
      "End-to-end data and automation systems for enterprise decisions, from pipelines and SQL logic to dashboards and web delivery.",
    url: siteUrl,
    siteName: "Nicolas Contreras Castellano",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Nicolas Contreras Castellano Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Contreras Castellano",
    description:
      "End-to-end data and automation systems for enterprise decisions, from pipelines and SQL logic to dashboards and web delivery.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
