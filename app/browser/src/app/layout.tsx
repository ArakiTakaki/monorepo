import { Inter } from 'next/font/google';
import { BaseLayout } from '@workspaces/react-base-layout';
import '@workspaces/scss-util/reset.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <BaseLayout iconImage={{ src: '/application-icon-2.png', alt: 'ヘッダーアイコン' }} title="DEV BLOG">
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
