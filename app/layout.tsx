import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Ameya Chitnis | Staff Software Architect",
  description: "Portfolio of Ameya Chitnis, Senior Software Engineer specialized in Node.js, React, and GCP cloud-native modernization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-ide-bg text-ide-text selection:bg-ide-accent/30 selection:text-white`}>
        <div className="relative min-h-screen">
          {/* subtle grid background for IDE feel */}
          <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
