import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className="relative antialiased
        bg-gradient-to-bl
        from-[#45baba] via-[#cffc7c] to-[#45baba]
        bg-[length:200%_200%] animate-gradient"
        >
        {/* AURORA */}
        <div className="bg-aurora pointer-events-none"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10">
            {children}
        </div>
        </body>
        </html>
    );
}