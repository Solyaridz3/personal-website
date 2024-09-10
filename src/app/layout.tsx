import type { Metadata } from "next";
import { Inter, Russo_One, Montserrat } from "next/font/google";

import "./globals.css";

const inter = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Serhiy Vynarchuk",
    description: "Serhiy Vynarchuk's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
