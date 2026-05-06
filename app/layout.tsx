import type { Metadata } from "next";
import { Esteban, Poppins } from "next/font/google";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

const esteban = Esteban({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${poppins.variable} ${esteban.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="page-shell flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1 pb-16 pt-28">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
