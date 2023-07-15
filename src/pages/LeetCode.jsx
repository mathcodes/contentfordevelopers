import Footer from "../components/Footer";
import PageHeader from "../components/pageHeader/PageHeader";
import NavBar from "../components/Navbar";
import ProblemSetTable from "../components/ProblemSetTable";
import leetcode from "../data/leetcode.json";

export default function Leetcode() {
  return (
    <div className="px-[5%] text-blue dark:text-white">
      <NavBar />
      <PageHeader
        title="LeetCode"
        description="Under Construction!!"
        image="https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/Images/LeetCode_logo_black.png"
      />
      <h4
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        LeetCode Problem
      </h4>
      <div className="mb-5 text-blue dark:text-white">
        <ProblemSetTable platformLogo={leetcode?.logo} problems={leetcode?.problems} />
      </div>
      <Footer />
    </div>
  );
}
