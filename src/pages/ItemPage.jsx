import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";

import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import { useParams } from 'react-router-dom';
import { LeetCodeSolutions } from "../data/solutionLC";
import HighlightComponent from "../components/highlight/HighlightComponent";

export default function ItemPage() {

  let idValue = useParams();
  let id = idValue.id - 1;
  const textRef = React.useRef();
  const javascript = `${LeetCodeSolutions[id].javascript}`
  const content = `${LeetCodeSolutions[id].content}`

  useEffect(() => {
    let sH = document.getElementById('showHideDiagram')
    if (!LeetCodeSolutions[id].image) {
      sH.style.display = 'none';
    } else {
      sH.style.display = 'block';
    }
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
    }
  }, []);

  const showHide = (() => {
    let image = document.getElementById('image');
    let button = document.getElementById('button');
    if (image.style.display === 'none') {
      image.style.display = 'block';
      button.innerHTML = 'Hide Diagram';
    } else {
      image.style.display = 'none';
      button.innerHTML = 'Show Diagram';
    }
  })

  return (
    <>
    <NavBar />
    <div class="container mx-auto" data-color-mode="dark">
      <div class="grid xs:grid-cols-1 sm:grid-cols-5 text-white bg-gray-900 ">
        <h1 class="sm:col-span-3 xs:col-span-1 p-2 flex justify-center">{LeetCodeSolutions[id].title}</h1>
        <p class="bg-blue-300 p-2 text-xs flex justify-center">Time Complexity:<br />{LeetCodeSolutions[id].Time_Complexity}</p>
        <p class="bg-blue-500 p-2 text-xs flex justify-center">Space Complexity: <br />{LeetCodeSolutions[id].Space_Complexity}</p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3>Description</h3>

        </div>
        <div>
          <h3>Javascript Solution</h3>
        </div>
        <div>
          {content}
        </div>
        <div>
          <HighlightComponent code={javascript} />
        </div>
        <div id="showHideDiagram">
          <button id="button" onClick={showHide}>Show Diagram</button>
          <a href={LeetCodeSolutions[id].image}><img id="image" src={LeetCodeSolutions[id].image} alt="img" width="50%" /></a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}