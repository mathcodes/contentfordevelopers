import Homepage from "./pages/Homepage";
import LeetCode from "./pages/LeetCode";
import CodeWars from "./pages/CodeWars";
import ItemPage from "./pages/ItemPage";
import Snippets from "./pages/Snippets";
// import Navbar from './components/navbar/Navbar';
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/codewars" element={<CodeWars />} />
          <Route path="/snippets" element={<Snippets />} />
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
