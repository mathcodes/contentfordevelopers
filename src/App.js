// import Homepage from "./pages/Homepage";
// import LeetCode from "./pages/LeetCode";
// import ItemPage from "./pages/ItemPage";
// import OnlineTools from "./pages/OnlineTools";
// import Header from "./components/header/Header";
// import PageComponent from "./pages/PageComponent";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import developersLibrary from "./pages/DevelopersLibrary";
// import codingConventions from "./pages/CodingConventions";
// import frameworksLibraries from "./pages/frameworksLibraries";
// import accessibilityWCAG from "./pages/accessibilityWCAG";
// import dsa from "./pages/dsa";
// import aiFuture from "./pages/aiFuture";
// import links from ".data/link.json";

// function App() {
//   return (
//     <div className="max-w-full bg-white dark:bg-blue">
//       <Header />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/leetcode" element={<LeetCode />} />
//           <Route path="/leetcode/:id" element={<ItemPage />} />
//           <Route path="/DevelopersLibrary" element={<PageComponent {...developersLibrary} />} />
//           <Route path="/CodingConventions" element={<PageComponent {...codingConventions} />} />
//           <Route path="/frameworksLibraries" element={<PageComponent {...frameworksLibraries} />} />
//           <Route path="/accessibilityWCAG" element={<PageComponent {...accessibilityWCAG} />} />
//           <Route path="/dsa" element={<PageComponent {...dsa} />} />
//           <Route path="/aiFuture" element={<PageComponent {...aiFuture} />} />
//           <Route path="/OnlineTools" element={<OnlineTools />} />
//           <Route path="/itempageLC" element={<ItemPage sol="lc" />} />
//           <Route path="/itempageCW" element={<ItemPage sol="cw" />} />
//           <Route path="/itempageHR" element={<ItemPage sol="cw" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import LeetCode from "./pages/LeetCode";
import ItemPage from "./pages/ItemPage";
import OnlineTools from "./pages/OnlineTools";
import Footer from "./components/footer/Footer";
import PageComponent from "./pages/PageComponent";
import developersLibrary from "./pages/DevelopersLibrary";
import codingConventions from "./pages/CodingConventions";
import Contribute from "./components/homepage/Contribute";

import frameworksLibraries from "./pages/frameworksLibraries";
import accessibilityWCAG from "./pages/accessibilityWCAG";
import dsa from "./pages/dsa";
import aiFuture from "./pages/aiFuture";
import link from './data/link.json';

function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-full bg-white dark:bg-blue">
      
      <main className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path={link.home} element={<Homepage />} />
            <Route path={link.leetcode} element={<LeetCode />} />
            <Route path={link.leetcodeItem} element={<ItemPage />} />
            <Route path={link.developersLibrary} element={<PageComponent {...developersLibrary} />} />
            <Route path={link.codingConventions} element={<PageComponent {...codingConventions} />} />
            <Route path={link.frameworksLibraries} element={<PageComponent {...frameworksLibraries} />} />
            <Route path={link.accessibilityWCAG} element={<PageComponent {...accessibilityWCAG} />} />
            <Route path={link.dsa} element={<PageComponent {...dsa} />} />
            <Route path={link.aiFuture} element={<PageComponent {...aiFuture} />} />
            <Route path={link.onlineTools} element={<OnlineTools />} />
            <Route path={link.itempageLC} element={<ItemPage sol="lc" />} />
            <Route path={link.itempageCW} element={<ItemPage sol="cw" />} />
            <Route path={link.itempageHR} element={<ItemPage sol="cw" />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Contribute />

      <Footer />
    </div>
  );
}

export default App;
