import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "ArcPay Payroll Dashboard",
  description: "Manage USDC payroll on Arc Testnet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}