import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zeliş'in Mutfağı",
  description:
    "Ev yemekleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <div id="modal"></div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

