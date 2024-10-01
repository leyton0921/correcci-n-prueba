'use client'
import { SessionProvider } from "next-auth/react";
import {Prompt} from "next/font/google"


const prompt = Prompt({subsets:["latin"],weight:"300"})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
