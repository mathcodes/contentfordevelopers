import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearningResource from "./pages/LearningResource";
import ProblemSolvingPlatform from "./pages/ProblemSolvingPlatform";
import leetcode from "./data/leetcode.json";
import codewars from "./data/codewars.json";
import ProblemSolution from "./pages/ProblemSolution";

function App() {
  return (
    <div className="max-w-full bg-white dark:bg-blue">
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/leetcode" element={<ProblemSolvingPlatform platform={leetcode} />} />
          <Route path="/codewars" element={<ProblemSolvingPlatform platform={codewars} />} />
          <Route path="/solution/:id" element={<ProblemSolution />} />
          <Route path="/resource/:id" element={<LearningResource />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
