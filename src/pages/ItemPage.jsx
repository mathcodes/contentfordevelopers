import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import { useParams } from 'react-router-dom';
import { LeetCodeSolutions } from "../data/solutionLC";
import HighlightComponent from "../components/highlight/HighlightComponent";

export default function ItemPage() {

  let idValue = useParams();
  let id = idValue.id - 1;
  let tit = LeetCodeSolutions[id];
  // return JSX that renders data from the array
  const textRef = React.useRef();
  const [code, setCode] = React.useState(
    `${LeetCodeSolutions[id].javascript}`
  );
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

  const onClick = (() => {
    let mode = document.body.getAttribute('data-color-mode');
    document.body.setAttribute('data-color-mode', mode === 'dark' ? 'light' : 'dark');
    document.getElementById('toggle').innerHTML = mode === 'dark' ? 'Dark' : 'Light';
  })

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
    <div class="container mx-auto" data-color-mode="dark">

      <div class="grid xs:grid-cols-1 sm:grid-cols-5 gap-4 text-white bg-gray-900">
        <h1 class="sm:col-span-3 xs:col-span-1 p-6">{LeetCodeSolutions[id].title}</h1>
        <p class="bg-blue-300 p-6 ">Time Complexity:<br/>{LeetCodeSolutions[id].Time_Complexity}</p>
        <p class="bg-blue-500 p-6">Space Complexity: <br/>{LeetCodeSolutions[id].Space_Complexity}</p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div data-color-mode="dark">
          <h3>Javascript</h3>
          <button id="toggle" onClick={onClick} className="bg-gray-900">Light</button>
          <HighlightComponent code={code}/>
        </div>
        <div id="showHideDiagram">
          <button id="button" onClick={showHide}>Show Diagram</button>
          <img id="image" src={LeetCodeSolutions[id].image} alt="img" width="50%" />
        </div>
      </div>

   





    </div>
  );
}