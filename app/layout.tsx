import type { Metadata } from "next";
import { Press_Start_2P, Sora, Inter } from "next/font/google";
import localFont from "next/font/local";
import { AgentationToolbar } from "@/components/dev/AgentationToolbar";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const minecraftTen = localFont({
  src: "../public/fonts/MinecraftTen.ttf",
  variable: "--font-minecraft",
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sreehari T — Full Stack Engineer",
  description:
    "Building scalable products, automation systems, and AI-powered experiences. Explore the world of Sreehari T, a full-stack engineer.",
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "512x512", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${minecraftTen.variable} ${sora.variable} ${inter.variable} antialiased bg-void text-foreground`}
      >
        {children}
        <AgentationToolbar />
      </body>
    </html>
  );
}
