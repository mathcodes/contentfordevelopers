import React from "react";
import placeholderLogo from "../../assets/Images/jCircle.png";

function Footer() {
  return (
    <footer className="max-w-full flex flex-col pt-8 bg-slate-300">
      <div className="flex lg:gap-40 md:gap-16 gap-8 md:flex-row flex-col justify-between mx-auto">
        <div className="leading-9 md:block flex flex-col items-center">
          <h4 className="font-bold leading-4 uppercase mb-6">Resources</h4>
          <ul className="md:text-left text-center">
            <li>
              <a href="/leetcode" className="hover:brightness-75 transition-all duration-300">Leetcode</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">HackerRank</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">CodeWars</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">Data Structures & Algorithms</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">Notes and Resources</a>
            </li>
          </ul>
        </div>
        <div className="leading-9 md:block flex flex-col items-center">
          <h4  className="font-bold leading-4 uppercase mb-6">Contribute</h4>
          <ul className="md:text-left text-center">
            <li>
              <a href="https://github.com/mathcodes/contentfordevelopers/blob/main/CONTRIBUTING.md" className="hover:brightness-75 transition-all duration-300">
                Contributing
              </a>
            </li>
            <li>
              <a href="https://docs.github.com/en/site-policy/github-terms/github-community-guidelines" className="hover:brightness-75 transition-all duration-300">
                Github Community Guidelines
              </a>
            </li>
          </ul>
        </div>
        <div className="leading-9 md:block flex flex-col items-center">
          <h4 className="font-bold leading-4 uppercase mb-6">About us</h4>
          <ul className="md:text-left text-center">
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">Meet the team</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">Social Media link</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">Social Media link</a>
            </li>
            <li>
              <a href="#" className="hover:brightness-75 transition-all duration-300">Social Media link</a>
            </li>
          </ul>
        </div>
      </div>
      <div  className="flex flex-col mt-8">
        <div className="flex justify-center">
          <img src={placeholderLogo} alt="placeholder logo" className="w-16"/>
        </div>
        <div className="flex justify-between w-80 py-8 mx-auto text-xs">
          <a href="#" className="hover:brightness-75 transition-all duration-300">Terms of Service</a>
          <a href="#" className="hover:brightness-75 transition-all duration-300">Privacy Policy </a>
          <a href="#" className="hover:brightness-75 transition-all duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
