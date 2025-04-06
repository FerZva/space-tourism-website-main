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
        <div className="bg-[url('/background-home-mobile.jpg')] md:bg-[url('/background-home-tablet.jpg')] lg:bg-[url('/background-home-desktop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen text-white">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
