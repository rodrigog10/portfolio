import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body
        className={`antialiased bg-gradient-to-br from-[#000929] via-[#c1ffc9ab] to-[#002929] bg-[length:200%_200%] animate-[gradientMove_10s_ease_infinite] `}
      >
        {children}
      </body>
    </html>
  );
}
