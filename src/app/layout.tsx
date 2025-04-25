import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
      <body className="antialiased w-full h-full">
        <div className="relative overflow-y-auto text-white w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
