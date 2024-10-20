import localFont from 'next/font/local';
import './globals.css';
import { config } from '@/lib/config';
import Navbar from '@/components/navbar/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata = {
  title: config.nama,
  author: 'FTI UNISKA',
  description:
    'Aplikasi Pemilihan Ketua Umum HMP dan Pemilihan Gubernur BEM FTI UNISKA'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
