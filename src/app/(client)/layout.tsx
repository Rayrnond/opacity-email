import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "opacity.email",
  description: "securely mask your email address for free",
  openGraph: {
    images: [
      {
        url: "https://opacity-email.s3.amazonaws.com/cdn/og.png",
        width: 1200,
        height: 630,
        alt: "opacity.email",
      }
    ]
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tracking via umami */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="f9557c9a-5545-4b7d-bb21-74081842d89c"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="flex justify-center items-center max-w-screen overflow-hidden h-screen bg-[url('/image.webp')] bg-cover bg-center lg:rounded-none rounded-xl">
          <div className="relative gap-y-5 bg-white/10 overflow-x-clip flex flex-col w-full xl:max-w-[60%] lg:max-w-[80%] max-w-full h-full lg:h-[50%] backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
