import React from "react";
import "./ItemCard.scss";
import { leetCodeData } from '../../data/leetCode'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import {Paper, Grid, Card} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let itemDifficulty = leetCodeData[0].difficulty
console.log(itemDifficulty)
function cellColor(itemDifficulty) {
  switch (itemDifficulty) {
    case 'Easy':
      return 'orange';
    case 'Medium':
      return 'orange'
    case 'Hard':
      return 'red'
    default:
      return 'black'
  }
}

const ItemCard = () => {
   
  return (
   <h1>Two Sum</h1>
  );
};

export default ItemCard;

