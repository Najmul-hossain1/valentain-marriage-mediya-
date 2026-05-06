import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrain = JetBrains_Mono({
  weight: ['200','300','400','500','600','700','800'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Marage mediya | deveoper",
  description: "A portfolio for education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={jetbrain.className}
    >
      <body >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <Header />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
