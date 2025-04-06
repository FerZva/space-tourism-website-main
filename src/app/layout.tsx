import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "Frontend Mentor Space Tourism Website Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
