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
  description: "Gear Up. Lock In. Go Forward",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${poppins.variable, anton.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
