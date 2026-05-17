import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kumboo | Kombucha bio premium",
  description:
    "Kumboo cree des kombuchas bio, frais et artisanaux en bouteille de verre premium."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans">{children}</body>
    </html>
  );
}
