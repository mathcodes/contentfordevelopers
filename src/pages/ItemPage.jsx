import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import { useParams } from 'react-router-dom';
import { LeetCodeSolutions } from "../data/solutionLC";
import "./ItemPage.scss";

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
    <Container className="container">
      <Grid container className="ItemPage">
        <Grid item xs={12} md={4}>
          <h1>{LeetCodeSolutions[id].title}</h1>
          <p>Time Complexity: {LeetCodeSolutions[id].Time_Complexity}</p>
          <p>Space_Complexity: {LeetCodeSolutions[id].Space_Complexity}</p>
        </Grid>


        <Grid item xs={12} md={8}>
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
              fontSize={400}
              style={{
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
          {/* create a button wiht that shows or hides the image referenced in teh items object in teh array */}
          <button id="button" onClick={showHide}>Show/Hide Image</button>
          <img id="image" src={LeetCodeSolutions[id].image} alt="img" width="50%" />
        </Grid>
      </Grid>
    </Container>
  );
}