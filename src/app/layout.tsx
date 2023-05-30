import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div lang="es">
      <div className={inter.className}>
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
