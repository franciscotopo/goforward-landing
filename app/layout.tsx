import type { Metadata } from "next";
import { Poppins, Anton } from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin'],
  variable: '--font-poppins'
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton'
})

export const metadata: Metadata = {
  title: "GoForward | Official Site",
  description: "GoForward WebPage using Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable, anton.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
