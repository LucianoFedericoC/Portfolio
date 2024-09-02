import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import logo from '../assets/SVG/logo.svg'
import './globals.css';
import 'dotenv/config';
import Footer from '@/components/navigation/footer';
import { ThemeProvider } from './theme-provider.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	icons: {icon: '/logo.svg'},
	title: 'Luciano Carducci',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
	    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
	);
}
