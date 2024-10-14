import type { Metadata } from "next";
import "./globals.css";
import Header  from "../components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "tnpLab",
  description: "Empowering the next generation of IT professionals with cutting-edge training and expert services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
