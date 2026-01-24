import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "OpenTech Lab - Transform Your Digital Vision",
    template: "%s | OpenTech Lab",
  },
  description:
    "We craft exceptional digital experiences through innovative web development, cutting-edge AI solutions, and strategic digital marketing.",
  keywords: [
    "web development",
    "AI solutions",
    "digital marketing",
    "cloud computing",
    "tech education",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
