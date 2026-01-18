import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "lite-tech | Tech News & Updates",
  description:
    "Your source for the latest tech news, security updates, and digital trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <NextTopLoader color="#d8f34e" showSpinner={false} shadow={false} />
        {children}
        <Toaster
          toastOptions={{
            className:
              "!rounded-none !bg-primary !border-3 !border-black !shadow-[6px_6px_0px_1px_#000000]",
          }}
          position="bottom-center"
        />
      </body>
    </html>
  );
}
