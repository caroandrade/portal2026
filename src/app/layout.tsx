import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";

const rem = REM({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Portal DGE Mendoza",
  description: "Portal Oficial de la Dirección General de Escuelas de Mendoza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rem.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
