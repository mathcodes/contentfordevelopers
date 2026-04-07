import React from 'react';
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './pages.css';

export default function PlaceholderPage({ title = 'Coming Soon' }) {
  return (
    <div className="leetCode text-blue dark:text-white">
      <NavBar />
      <main className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-4 max-w-xl">
          This section is currently under construction. Check back soon for new content!
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
