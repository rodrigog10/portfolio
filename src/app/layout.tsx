import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-[#003636] via-[#c1ffc9ab] to-[#003636]  `}
      >
        {children}
      </body>
    </html>
  );
}
