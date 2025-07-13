import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-tl from-[#67f0ff95] via-[#fffdc9] to-[#67f0ff95]  text-[#3ea4af]`}
      >
        {children}
      </body>
    </html>
  );
}
