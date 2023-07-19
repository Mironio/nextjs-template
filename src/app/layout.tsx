import './globals.css';
import localFont from 'next/font/local';
import appMetadata from '@/app/appMetadata';
import Footer from '@/components/Footer';
import ClientProviders from '@/app/ClientProviders';

const sofiaProFont = localFont({
  src: [
    {
      path: '../../public/fonts/SofiaProRegular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/SofiaProBold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-sofia-pro',
});

export const metadata = appMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sofiaProFont.variable} font-sans`} suppressHydrationWarning>
        <main className="flex min-h-screen flex-col items-center justify-between px-4">
          <ClientProviders>
            <div>{children}</div>
          </ClientProviders>
          <Footer />
        </main>
      </body>
    </html>
  );
}
