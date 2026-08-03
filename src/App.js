import Homepage from "./pages/Homepage";
import LeetCode from "./pages/LeetCode";
import ItemPage from "./pages/ItemPage";
import OnlineTools from "./pages/OnlineTools";
import DevelopersLibrary from "./pages/DevelopersLibrary";
import DSA from "./pages/DSA";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { topics } from "./data/topicsData";
import CodingConventions from "./pages/CodingConventions";
import FrameworksAndLibraries from "./pages/FrameworksAndLibraries";
import AccessibilityAndWCAGGuidelines from "./pages/AccessibilityAndWCAGGuidelines";
import AIAndTheFuture from "./pages/AIAndTheFuture";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import { DevEyesProvider } from "./context/DevEyesContext";
import DevEyesToggle from "./components/DevEyes/DevEyesToggle";

function App() {
  return (
    <DevEyesProvider>
      <div className="max-w-full flex-1 flex flex-col bg-white dark:bg-blue">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/leetcode/:id" element={<ItemPage />} />
            <Route path="/DevelopersLibrary" element={<DevelopersLibrary topic={topics[0]} />} />
            <Route path="/codingconventions" element={<CodingConventions topic={topics[1]} />} />
            <Route path="/frameworksandlibraries" element={<FrameworksAndLibraries topic={topics[2]} />} />
            <Route path="/accessibilityandwcagguidelines" element={<AccessibilityAndWCAGGuidelines topic={topics[3]} />} />
            <Route path="/dsa" element={<DSA topic={topics[4]} />} />
            <Route path="/aiandthefuture" element={<AIAndTheFuture topic={topics[5]} />} />
            <Route path="/OnlineTools" element={<OnlineTools />} />
            <Route path="/itempageLC" element={<ItemPage sol="lc" />} />
            <Route path="/itempageCW" element={<ItemPage sol="cw" />} />
            <Route path="/itempageHR" element={<ItemPage sol="cw" />} />
            <Route path="/codewars" element={<PlaceholderPage title="CodeWars" />} />
            <Route path="/hackerrank" element={<PlaceholderPage title="HackerRank" />} />
            <Route path="/notes" element={<PlaceholderPage title="Notes & Resources" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <DevEyesToggle />
      </div>
    </DevEyesProvider>
  );
}

export default App;
