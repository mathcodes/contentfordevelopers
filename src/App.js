import Homepage from "./pages/Homepage";
import LeetCode from "./pages/LeetCode";
// import CodeWars from "./pages/CodeWars";
import ItemPage from "./pages/ItemPage";
import OnlineTools from "./pages/OnlineTools";
// import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header";
import DevelopersLibrary from "./pages/DevelopersLibrary";
import DSA from "./pages/DSA";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {topics} from "./data/topicsData";
import CodingConventions from "./pages/CodingConventions";
import FrameworksAndLibraries from "./pages/FrameworksAndLibraries";
import AccessibilityAndWCAGGuidelines from "./pages/AccessibilityAndWCAGGuidelines";
import AIAndTheFuture from "./pages/AIAndTheFuture";

function App() {
  return (
    <div className="max-w-full bg-white dark:bg-blue">
      <Header />
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/leetcode/:id" element={<ItemPage />} />
          <Route path="/DevelopersLibrary"
          element={
          <DevelopersLibrary
            title={topics[0].title}
            description={topics[0].description}
            point1={topics[0].point1}
            point2={topics[0].point2}
            point3={topics[0].point3}
            icon={topics[0].icon}
            link={topics[0].link}/>}
            />
          <Route path="/codingconventions"
          element={
          <CodingConventions
            title={topics[1].title}
            description={topics[1].description}
            point1={topics[1].point1}
            point2={topics[1].point2}
            point3={topics[1].point3}
            icon={topics[1].icon}
            link={topics[1].link}/>}
            />
            <Route path="/frameworksandlibraries"
          element={
          <FrameworksAndLibraries
            title={topics[2].title}
            description={topics[2].description}
            point1={topics[2].point1}
            point2={topics[2].point2}
            point3={topics[2].point3}
            icon={topics[2].icon}
            link={topics[2].link}/>}
            />
            <Route path="/accessibilityandwcagguidelines"
          element={
          <AccessibilityAndWCAGGuidelines
            title={topics[3].title}
            description={topics[3].description}
            point1={topics[3].point1}
            point2={topics[3].point2}
            point3={topics[3].point3}
            icon={topics[3].icon}
            link={topics[3].link}/>}
            />
            <Route path="/dsa"
          element={
          <DSA
            title={topics[4].title}
            description={topics[4].description}
            point1={topics[4].point1}
            point2={topics[4].point2}
            point3={topics[4].point3}
            icon={topics[4].icon}
            link={topics[4].link}/>}
            />
            <Route path="/aiandthefuture"
          element={
          <AIAndTheFuture
            title={topics[5].title}
            description={topics[5].description}
            point1={topics[5].point1}
            point2={topics[5].point2}
            point3={topics[5].point3}
            icon={topics[5].icon}
            link={topics[5].link}/>}
            />
          <Route path="/onlinetools"
          element={
          <OnlineTools
            title={topics[6].title}
            description={topics[6].description}
            point1={topics[6].point1}
            point2={topics[6].point2}
            point3={topics[6].point3}
            icon={topics[6].icon}
            link={topics[6].link}/>}
          />
          <Route path="/OnlineTools" element={<OnlineTools />} />
          <Route path="/itempageLC" element={<ItemPage sol="lc" />} />
          <Route path="/itempageCW" element={<ItemPage sol="cw" />} />
          <Route path="/itempageHR" element={<ItemPage sol="cw" />} />
          {/* <Route path="/hackerrank" element={<HackerRank/>} />
          <Route path="/codewars" element={<CodeWars/>} />
          <Route path="/dsa" element={<DSA/>} />
          <Route path="/notesandresources" element={<NotesAndResources/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
