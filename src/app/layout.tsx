import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '每日心理学词典',
  description: '每天一个心理学概念，助你成长'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh'>
      <body className='bg-gray-50'>{children}</body>
    </html>
  );
}
