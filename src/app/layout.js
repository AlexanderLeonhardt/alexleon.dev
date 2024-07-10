import BackgroundParticles from "@/components/BackgroundParticles/BackgroundParticles";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "alexleon.dev",
  description: "My portfolio website. Check out my side projects, blog posts, and contact info.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundParticles />
        {children}
      </body>
    </html>
  );
}
