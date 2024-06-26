import type { Metadata } from "next";
// eslint-disable-next-line import/order
import { Roboto } from "next/font/google";

import { ReactNode } from "react";

import "./globals.css";
import "../styles/grid.scss";
import "../styles/flex.scss";
import "../styles/fonts.scss";
import "../styles/common.scss";
import { Header } from "@Basket/components/organisms/header";
import { Footer } from "@Basket/components/organisms/footer";
import { DESCRIPTION, TITLE } from "@Basket/data/content";


const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "500", "700"],  display: "swap" });

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
