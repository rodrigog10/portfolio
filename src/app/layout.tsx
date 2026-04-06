import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-[#002929] via-[#c1ffc9ab] to-[#002929]  `}
      >
        {children}
      </body>
    </html>
  );
}
