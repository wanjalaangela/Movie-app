import './globals.css';
import Header from '@/sharedComponents/Header';
import Footer from '@/sharedComponents/ Footer';

export const metadata = {
  title: 'Moovie',
  description: 'Movie browsing app built with Next.js and TMDB API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer />  
      </body>
    </html>
  );
}
