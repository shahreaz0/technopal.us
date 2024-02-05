import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="eng">
        <body className={`dark:bg-black`}>
          <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
            {children}
            <Toaster richColors expand />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
