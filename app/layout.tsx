import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://c8tech.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "C8 Tech | Soluciones de datos simples y confiables",
    template: "%s | C8 Tech",
  },
  description:
    "C8 Tech transforma decisiones operativas con datos claros y automatizaciones sencillas listas para funcionar.",
  openGraph: {
    title: "C8 Tech",
    description:
      "C8 Tech transforma decisiones operativas con datos claros y automatizaciones sencillas.",
    url: siteUrl,
    siteName: "C8 Tech",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "C8 Tech",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C8 Tech",
    description:
      "C8 Tech transforma decisiones operativas con datos claros y automatizaciones sencillas.",
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
        className={`${spaceGrotesk.variable} ${interSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
