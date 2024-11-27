import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the font weights you need
  display: 'swap',        // Use 'swap' for better performance
});

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '700'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Three Tiger Technical Challenge 202411",
  description: "To Do App generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}
