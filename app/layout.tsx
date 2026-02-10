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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ncctechnology.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NCC Technology | Soluciones de datos simples y confiables",
    template: "%s | NCC Technology",
  },
  description:
    "NCC Technology transforma decisiones operativas con datos claros y automatizaciones sencillas listas para funcionar.",
  openGraph: {
    title: "NCC Technology",
    description:
      "NCC Technology transforma decisiones operativas con datos claros y automatizaciones sencillas.",
    url: siteUrl,
    siteName: "NCC Technology",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "NCC Technology",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCC Technology",
    description:
      "NCC Technology transforma decisiones operativas con datos claros y automatizaciones sencillas.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
