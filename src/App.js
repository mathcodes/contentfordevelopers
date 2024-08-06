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
// import links from ".data/links.json";

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
import Header from "./components/header/Header";
import PageComponent from "./pages/PageComponent";
import developersLibrary from "./pages/developersLibrary";
import codingConventions from "./pages/codingConventions";
import frameworksLibraries from "./pages/frameworksLibraries";
import accessibilityWCAG from "./pages/accessibilityWCAG";
import dsa from "./pages/dsa";
import aiFuture from "./pages/aiFuture";
import links from './links.json';

function App() {
  return (
    <div className="max-w-full bg-white dark:bg-blue">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={links.home} element={<Homepage />} />
          <Route path={links.leetcode} element={<LeetCode />} />
          <Route path={links.leetcodeItem} element={<ItemPage />} />
          <Route path={links.developersLibrary} element={<PageComponent {...developersLibrary} />} />
          <Route path={links.codingConventions} element={<PageComponent {...codingConventions} />} />
          <Route path={links.frameworksLibraries} element={<PageComponent {...frameworksLibraries} />} />
          <Route path={links.accessibilityWCAG} element={<PageComponent {...accessibilityWCAG} />} />
          <Route path={links.dsa} element={<PageComponent {...dsa} />} />
          <Route path={links.aiFuture} element={<PageComponent {...aiFuture} />} />
          <Route path={links.onlineTools} element={<OnlineTools />} />
          <Route path={links.itempageLC} element={<ItemPage sol="lc" />} />
          <Route path={links.itempageCW} element={<ItemPage sol="cw" />} />
          <Route path={links.itempageHR} element={<ItemPage sol="cw" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
