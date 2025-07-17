import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Auth0ProviderWithNavigate } from "../components/Auth0Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello World Next.js App with Auth0",
  description: "A simple Hello World application built with Next.js and protected with Auth0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Client-side only */}
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  );
}
