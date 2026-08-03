import React from 'react';
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen text-blue dark:text-white">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
        <p className="eyebrow gradientText mb-3">404</p>
        <h1 className="heading-1 mb-4">Page Not Found</h1>
        <p className="body text-slate-500 dark:text-slate-400 max-w-md mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <a href="/" className="btn-primary">Return Home</a>
      </main>
      <Footer />
    </div>
  );
}

