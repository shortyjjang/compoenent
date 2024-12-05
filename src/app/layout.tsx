import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/assets/css/globals.css";
import { LayoutProvider } from "@/globals/Layout";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Component Library",
  description: "My Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.className} text-sm antialiased`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}