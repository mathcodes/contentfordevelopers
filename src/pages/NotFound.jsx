import React from 'react';
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './pages.css';

export default function NotFound() {
  return (
    <div className="leetCode text-blue dark:text-white">
      <NavBar />
      <main className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl mb-4 max-w-xl">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </main>
      <Footer />
    </div>
  );
}
