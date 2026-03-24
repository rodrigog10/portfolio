import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-[#014d4d] via-[#c1ffc9ab] to-[#014d4d]  `}
      >
        {children}
      </body>
    </html>
  );
}
