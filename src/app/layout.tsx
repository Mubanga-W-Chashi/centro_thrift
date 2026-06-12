import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centro Thrift",
  description: "Curated one-off thrift finds with structured reservations and scheduled delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
