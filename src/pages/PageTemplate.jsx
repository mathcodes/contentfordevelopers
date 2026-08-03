import React from 'react';
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";

export default function PageTemplate({ topic }) {
  const { title, description, point1, point2, point3, icon: Icon } = topic || {};

  return (
    <div className="flex flex-col min-h-screen text-blue dark:text-white">
      <NavBar />
      <main className="flex-1">
        <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
          <div className="site-container">
            <div className="flex items-center gap-3 mb-4">
              {Icon && <Icon className="w-8 h-8 text-accent2" />}
              <h1 className="heading-1">{title}</h1>
            </div>
            <p className="body-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-6">{description}</p>
            <ul className="space-y-2 mb-8">
              {[point1, point2, point3].filter(Boolean).map((point, i) => (
                <li key={i} className="flex items-start gap-2 body text-slate-600 dark:text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="site-container">
            <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 p-12 text-center">
              <p className="eyebrow text-slate-400 mb-2">In Progress</p>
              <h2 className="heading-2 text-slate-500 dark:text-slate-400">Content Coming Soon</h2>
              <p className="body text-slate-400 mt-3 max-w-md mx-auto">
                This section is actively being built. Want to help shape it?
              </p>
              <a
                className="btn-primary mt-6 inline-flex"
                href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
              >
                Contribute
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
