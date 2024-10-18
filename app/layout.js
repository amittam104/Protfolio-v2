import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Amit Tambulkar Portfolio",
  description:
    "Hi, this Amit. Web developer from India building applications that people are using. Building an npm package too.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="text-slate-950">{children}</body>
    </html>
  );
}
