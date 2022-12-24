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
import { leetCodeData } from "../data/leetCode";

 


export default function ItemPage() {
  let idValue = useParams();
  console.log(idValue);
 console.log(idValue.id);
 let localData = leetCodeData[idValue.id-1];
 console.log(localData)
 let ItemAsnwer = `../assets/LeetCode/${localData.title}.png`;
  console.log(ItemAsnwer);
  // WRITE A function that return js file in   folder containing the same name as the title of the problem:
  let ItemAnswer = `../assets/LeetCode/${localData.title}.js`;

 


  return (
  
    <div>
      {ItemAnswer}
      <h1> 
        {localData.title}
      </h1>
      <p>
        {localData.difficulty}
        {localData.tags}
      </p>
       
    </div>
  );
}
// 'id': 1,
// 'title': '1. Two Sum',
// 'link': 'https://leetcode.com/problems/two-sum/',
// 'difficulty': 'Easy',
// 'solved': true,
// 'tags': ['Array', 'Hash Table']
