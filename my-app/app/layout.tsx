import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import Footer from "./homepage/footer";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "brandflow",
  keywords: "brandflow, personal branding, web development, entrepreneurs, branding",
  description: "Helping established entrepreneurs, founders and executives to grow their personal brand!",
};

export default function RootLayout({ children, }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brandflow_default.svg" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-15PVWMS607"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-15PVWMS607');
            `,
          }}
        />
        {/* End Google Analytics */}
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
