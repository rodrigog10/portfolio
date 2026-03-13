import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-tl from-[#67f0ffb1] via-[#fffdbc] to-[#67f0ffb1]  `}
      >
        {children}
      </body>
    </html>
  );
}
