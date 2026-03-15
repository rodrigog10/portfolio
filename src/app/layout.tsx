import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-[#67f0ffb1] via-[#e1ffdb] to-[#67f0ffb1]  `}
      >
        {children}
      </body>
    </html>
  );
}
