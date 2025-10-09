import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/style.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Larix - Responsive One Page NextJS Template'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
