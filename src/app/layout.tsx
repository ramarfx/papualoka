import type { Metadata } from "next";
import { Geom, Montserrat } from "next/font/google";
import "./globals.css";
import InitialLoader from "@/components/initial-loader";

const geom = Geom({
  variable: "--font-geom",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://papualoka.vercel.app"),
  title: "PapuaLoka | Mengenal Papua Lebih Dekat",
  description: "Eksplorasi keindahan alam, kekayaan budaya, dan keragaman tradisi suku-suku di tanah Papua. Temukan pesona tersembunyi dari ujung timur Nusantara.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PapuaLoka | Mengenal Papua Lebih Dekat",
    description: "Eksplorasi keindahan alam, kekayaan budaya, dan keragaman tradisi suku-suku di tanah Papua. Temukan pesona tersembunyi dari ujung timur Nusantara.",
    url: "https://papualoka.vercel.app",
    siteName: "PapuaLoka",
    images: [
      {
        url: "/img/preview.png",
        width: 1440,
        height: 808,
        alt: "PapuaLoka Preview Image",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PapuaLoka | Mengenal Papua Lebih Dekat",
    description: "Eksplorasi keindahan alam, kekayaan budaya, dan keragaman tradisi suku-suku di tanah Papua.",
    images: ["/img/home-bg.png"],
  },
  keywords: ["Papua", "Budaya", "Tradisi", "Keindahan Alam", "Suku-Suku Papua"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geom.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
