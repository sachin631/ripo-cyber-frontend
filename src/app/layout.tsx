import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/app/component/Navbar";
import Navbar from "./component/Navbar";
import QueryProvider from "@/tanstack/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
