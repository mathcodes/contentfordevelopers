import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';
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
  let id = idValue.id;
  console.log(id);
  let tit = LeetCodeSolutions[id];    
  console.log(tit)
   // return JSX that renders data from the array
  return (
    <div className="ItemPage">
      <h1>{ LeetCodeSolutions[id].title }</h1>
      <p>Time Complexity: { LeetCodeSolutions[id].Time_Complexity }</p>
      <p>Space_Complexity: { LeetCodeSolutions[id].Space_Complexity }</p>
      <hr/>
      <hr/>

      <code>
        { LeetCodeSolutions[id].javascript }
      </code>
      <p>{ LeetCodeSolutions[id].solution }</p>
    </div>
  );
}