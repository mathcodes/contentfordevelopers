import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import ReactPlayer from 'react-player'
import { HiVideoCamera } from 'react-icons/hi'
import { BsFillImageFill, BsFilm } from 'react-icons/bs'
import { TbMovie } from 'react-icons/tb'
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
import { useParams } from 'react-router-dom';
import { LeetCodeSolutions } from "../data/solutionLC";
import { CodeWarsSolutions } from "../data/solutionCW";
import HighlightComponent from "../components/highlight/HighlightComponent";

export default function ItemPage({sol}) {

  let data = sol === 'lc' ? LeetCodeSolutions : CodeWarsSolutions;

  let idValue = useParams();
  let id = idValue.id - 1;
  const textRef = React.useRef();
  const javascript = `${data[id].javascript}`
  const content = `${data[id].content}`

  useEffect(() => {
    let sH = document.getElementById('showHideDiagram')
    if (!data[id].image) {
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
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  })

  return (
    <>
      <div className="container mx-auto" data-color-mode="dark">
        <NavBar />
        <div className="grid xs:grid-cols-1 sm:grid-cols-5 dark:text-white dark:bg-black bg-white text-blue">
          <h1 className="sm:col-span-3 xs:col-span-1 p-2 flex justify-center">{data[id].title}</h1>
          <p className="bg-blue-300 p-2 text-xs flex justify-center">Time Complexity:<br />{data[id].Time_Complexity}</p>
          <p className="bg-blue-500 p-2 text-xs flex justify-center">Space Complexity: <br />{data[id].Space_Complexity}</p>
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 dark:bg-blue dark:text-platinum text-blue bg-platinum p-3">
          <div className="leading-10">
            <h1 className="text-2xl">Description</h1>
            {content}
            <hr />
            <div className="flex mx-2 mt-2 gap-2">
              <BsFilm />
              <BsFillImageFill />
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Javascript Solution</h1>
            <HighlightComponent code={javascript} />
          </div>
          <div className="mb-12 min-h-500">
            <h1 className="text-2xl">Video Solution</h1>
            <ReactPlayer url={data[id].video} width="100%" height="100%" />
          </div>
          <div id="showHideDiagram">
            <button className="text-2xl" id="button" onClick={showHide}>Diagram</button>
            <a href={data[id].image}><img id="image" src={data[id].image} alt="img" width="50%" /></a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}