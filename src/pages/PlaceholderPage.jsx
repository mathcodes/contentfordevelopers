import React from 'react';
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function PlaceholderPage({ title = 'Coming Soon' }) {
  return (
    <div className="flex flex-col min-h-screen text-blue dark:text-white">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
        <p className="eyebrow text-slate-400 mb-3">Under Construction</p>
        <h1 className="heading-1 mb-4">{title}</h1>
        <p className="body text-slate-500 dark:text-slate-400 max-w-md mb-8">
          This section is being built. Check back soon for new content, or help us build it!
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/" className="btn-primary">Return Home</a>
          <a
            href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Contribute
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

