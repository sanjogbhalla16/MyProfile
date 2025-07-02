import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  variable: "--font-jetbrainsMono", // 👈 exposes the CSS variable
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} antialiased`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
