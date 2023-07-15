import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Hero from "../components/homepage/hero/Hero";
import Learn from "../components/homepage/Learn";
import Contribute from "../components/homepage/Contribute";

export default function Home() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Hero
        title= "ContentForDevelopers!"
        preTitle='Welcome to&nbsp;'
        description="An open-source project aimed at providing learning tools for
        developers that cover a wide range of learning styles."
      />
      <Learn />
      <Contribute />
      <Footer />
    </div>
  );
}
