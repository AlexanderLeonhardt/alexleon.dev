import BackgroundParticles from "@/components/BackgroundParticles/BackgroundParticles";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "alexleon.dev",
    template: "%s | alexleon.dev"
  },
  description: "My portfolio website. Check out my side projects, blog posts, and contact info.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <BackgroundParticles lineSize={2} pointSize={4}/>
        {children}
      </body>
    </html>
  );
}
