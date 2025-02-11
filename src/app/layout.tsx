import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Developer Ruhul Amin",
  description:
    "A portfolio showcasing my projects, blogs, and contact details.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sesion = await getServerSession(authOptions);
  return (
    <html suppressHydrationWarning lang="en" data-theme="light">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar sesion={sesion} />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
