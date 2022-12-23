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
    <>

      {leetCodeData.map((item) => {
       
        return (
          <Card className="IndividualItemCard">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item className="itemCardTitle">
                  <h2>{item.title}</h2>
                  <div className="tagWrapper">
                  {item.tags.map((t) =>
                  
                  <div className="tag">{t}</div>)}
                  </div>
                </Item>
              
              </Grid>
              <Grid item xs={5}>
                <Item className="itemCard2ndRow"><a href={item.link} target="blank">
                  Original
                </a></Item>
                <Item  className="itemCard2ndRow" style={{ color: cellColor(itemDifficulty) }}>{item.difficulty}</Item>

              </Grid>
              <Grid item xs={7} >
                
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </>
  );
};

export default ItemCard;