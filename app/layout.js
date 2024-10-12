import "./globals.css";

export const metadata = {
  title: "Amit Tambulkar Portfolio",
  description:
    "Hi, this Amit. Web developer from India building applications that people are using. Building an npm package too.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-950">{children}</body>
    </html>
  );
}
