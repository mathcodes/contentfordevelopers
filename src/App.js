import Homepage from "./pages/Homepage";
import LeetCode from "./pages/LeetCode";
import ItemPage from "./pages/ItemPage";
import OnlineTools from "./pages/OnlineTools";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearningResource from "./pages/LearningResource";

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
          <Route path="/resource/:id" element={<LearningResource />} />
          <Route path="/OnlineTools" element={<OnlineTools />} />
          <Route path="/itempageLC" element={<ItemPage sol="lc" />} />
          <Route path="/itempageCW" element={<ItemPage sol="cw" />} />
          <Route path="/itempageHR" element={<ItemPage sol="cw" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
