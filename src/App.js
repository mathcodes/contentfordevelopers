import Homepage from "./pages/Homepage";
import LeetCode from "./pages/LeetCode";
import ItemPage from "./pages/ItemPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="max-w-full">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/leetcode/:id" element={<ItemPage />} />
          <Route path="/itempage" element={<ItemPage />} />
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
