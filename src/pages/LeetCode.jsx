import React, { useState } from 'react';
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import { leetCodeData } from '../data/leetCode';
import TailwindTable from '../components/TailwindTable/TailwindTable';

export default function Leetcode() {
  const [tableVisible, setTableVisible] = useState(false);

  return (
    <div className="flex flex-col min-h-screen text-blue dark:text-white">
      <NavBar />
      <main className="flex-1">
        <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
          <div className="site-container">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png"
                alt="LeetCode"
                className="h-8 w-auto dark:invert"
              />
              <h1 className="heading-1">LeetCode</h1>
            </div>
            <p className="body-lg text-slate-600 dark:text-slate-400 mb-6">
              Practice problems and solutions to sharpen your interview skills.
            </p>
            {!tableVisible && (
              <button
                className="btn-primary"
                onClick={() => setTableVisible(true)}
              >
                Browse Problems
              </button>
            )}
          </div>
        </section>

        {tableVisible && (
          <section className="py-8">
            <div className="site-container">
              <TailwindTable data={leetCodeData} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

