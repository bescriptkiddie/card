import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '小班朋友们的社交名片',
  description: '小班朋友们，一起成长'
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
