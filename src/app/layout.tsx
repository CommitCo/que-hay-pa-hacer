import type { Metadata } from "next";
import { Radio_Canada } from 'next/font/google'
import "./globals.css";
import {Providers} from "./providers";

const font  = Radio_Canada({
  weight: ['400', '400'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Que hay pa hacer",
  description: "El mayor desocupe en un solo lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className='dark'>
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}