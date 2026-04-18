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
        from-[#75ffff] via-[#cdff73] to-[#5effff]
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