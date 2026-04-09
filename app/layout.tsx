import { Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { AppShell } from "@/components/app-shell"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthSessionProvider } from "@/components/session-provider"
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", outfit.variable)}
    >
      <body>
        <AuthSessionProvider>
          <ThemeProvider>
            <AppShell>{children}</AppShell>
            <Toaster richColors position="top-center" />
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  )
}
