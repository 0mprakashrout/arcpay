import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "ArcPay Payroll Dashboard",
  description: "Payroll dashboard on Arc Testnet with USDC payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}