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
    <div class="container mx-auto">

      <div class="grid grid-cols-3 xs:grid-col-1 gap-4 text-white bg-gray-900 p-6">
        <h1>{LeetCodeSolutions[id].title}</h1>
        <p>Time Complexity: {LeetCodeSolutions[id].Time_Complexity}</p>
        <p>Space Complexity: {LeetCodeSolutions[id].Space_Complexity}</p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div data-color-mode="dark">
          <button id="toggle" onClick={onClick} bg-gray-900>Light</button>
          <h3>Javascript</h3>
          <HighlightComponent code={code}/>
        </div>
        <div>
          <button id="button" onClick={showHide}>Show/Hide Image</button>
          <img id="image" src={LeetCodeSolutions[id].image} alt="img" width="50%" />
        </div>
      </div>

   





    </div>
  );
}