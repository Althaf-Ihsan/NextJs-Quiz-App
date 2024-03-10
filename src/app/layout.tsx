"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import useQuiz from "@/store/Index";
import Quiz from "./@quiz/Page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
