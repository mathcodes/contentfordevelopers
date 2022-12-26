import React, { useEffect } from "react";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import { ReactDOM, Route, Link, Routes, useParams } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';
// import Footer from "../components/footer/Footer";
// import NavBar from "../components/navbar/Navbar";
// import PlatformCard from "../components/card/PlatformCard";
// import Header from "../components/header/Header";
import { LeetCodeSolutions } from "../data/solutionLC";
import "./ItemPage.scss";

export default function ItemPage() {

  let idValue = useParams();
  let id = idValue.id - 1;
  console.log(id);
  let tit = LeetCodeSolutions[id];
  console.log(tit)
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
//  this function will show or hide the image in teh element with id=image
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
    <div className="container">
      <div className="ItemPage">
        <h1>{LeetCodeSolutions[id].title}</h1>
        <p>Time Complexity: {LeetCodeSolutions[id].Time_Complexity}</p>
        <p>Space_Complexity: {LeetCodeSolutions[id].Space_Complexity}</p>
        <hr />
      </div>
      <div>
        {/* create a button with onclick that changes the mode of the codeeditor bu also the text inside the button  */}
        <button id="toggle" onClick={onClick}>Light</button>

        {/* create onClick handler in a button that toggles which CodeEditor to show on the ui */}

        <div data-color-mode="dark">
          <h3>Javascript</h3>
          <CodeEditor
            value={code}
            ref={textRef}
            language="js"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              fontSize: 12
            }}
          />
        </div>
        {/* create a button wiht that shows or hides the image referenced in teh items object in teh array */}
        <button id="button" onClick={showHide}>Show/Hide Image</button>
        <img id="image" src={LeetCodeSolutions[id].image} alt="img" />
      </div>
    </div>
  );
}