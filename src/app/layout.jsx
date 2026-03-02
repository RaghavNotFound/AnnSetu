import "./globals.css";
import { AuthProviderWrapper } from "./providers";

export const metadata = {
    title: "Ann Setu - Cold Storage Dashboard",
    description: "Cold Storage Management Dashboard",
    icons: {
        icon: "/ann-setu-logo.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <AuthProviderWrapper>
                    {children}
                </AuthProviderWrapper>
            </body>
        </html> 
    );
}
