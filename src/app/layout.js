import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import SmoothScrolling from "@/components/shared/smooth-scrolling";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "BAU AI - Architecture & AI Innovation",
  description: "Leveraging cutting-edge AI for the future of architecture and construction.",
  keywords: ["AI", "Architecture", "Design", "Innovation", "BAU AI"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-black selection:text-white`}
      >
        <SmoothScrolling>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
