import './ui/global.css';

import { plusJakartaSans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">

      <body className={`${plusJakartaSans.className} antialiased `}>
        {children}
      </body>
    </html>
  );
}
