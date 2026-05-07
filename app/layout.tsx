import type { Metadata } from "next";
import GlobalEffects from "@/components/global-effects";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Safa Sanctuary",
    template: "%s | Safa Sanctuary",
  },
  description:
    "Support, empowerment, and culturally responsive community navigation for women in Brooklyn and Queens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <div className="page-shell flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <GlobalEffects />
      </body>
    </html>
  );
}
