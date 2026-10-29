import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MessageSquare } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow pt-16 lg:pt-24">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-white text-brand-blue text-xs font-bold py-2 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
