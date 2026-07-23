import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'Лютейшее',
  description: 'Архив путешествий Сергея',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
