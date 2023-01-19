import * as React from 'react';
import { Link } from 'react-router-dom';
import "./ItemCard.scss";
import { leetCodeData } from '../../data/leetCode'
import { styled } from '@mui/material/styles';
import { Paper, Grid, Card } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import "../../pages/LeetCode.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemCard = () => {

  return (
    <>
      {leetCodeData.map((item) => {
        return (
          <Card className="IndividualItemCard">
            <Grid container spacing={1}>
              <Grid item xs={12} md={9}>
                <Link to={{ pathname: `/leetcode/${item.id}`, }}>
                  <Item className="itemCardTitle" xs={12} md={9}>
                    <Item item xs={12} md={9}>{item.title}</Item>
                    <Item item xs={12} md={3} className="">
                      {item.tags.map((t) =>
                        <div className="tag">{t}</div>)}
                    </Item>
                  </Item>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="" >
                  <Item md={3} className="itemCard2ndRow originalItem"><a href={item.link} target="blank">
                    <LinkIcon />
                  </a></Item>
                  <Item
                    md={3}
                    className="itemCard2ndRow difficultyItem"
                    style={{
                      backgroundColor: item.difficulty === 'Easy'
                        ?
                        'green'
                        :
                        item.difficulty === 'Medium'
                          ?
                          'orange'
                          :
                          'red',
                      color: item.difficulty === 'Easy'
                        ?
                        'limegreen'
                        :
                        item.difficulty === 'Medium'
                          ?
                          'yellow'
                          :
                          'black'
                    }}
                  >
                    {item.difficulty}
                  </Item>
                </div>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </>
  );
};

export default ItemCard;