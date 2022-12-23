import * as React from 'react';
import "./ItemCard.scss";
import { leetCodeData } from '../../data/leetCode'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Editor from '../editor/Editor'
import { Paper, Grid, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../../pages/LeetCode.css"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      {leetCodeData.map((item) => {

        return (
          <Card onClick={handleOpen} className="IndividualItemCard">

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
              <Grid item xs={12}>
                <div className="bottomItemCard">
                  <Item className="itemCard2ndRow originalItem"><a href={item.link} target="blank">
                    Original
                  </a></Item>
                  <Item
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
            <Modal
              style={{
                margin: '3rem',
              }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                style={{
                  padding: '1rem'
                }}
                sx={{ flexGrow: 2 }}>
                <Grid container spacing={{ xs: 2}} columns={{ xs: 6, sm:6 }}>

                  <Grid
                    style={{
                      backGround: ` #259fe9`
                    }}
                    item xs={2} sm={4} md={4}>
                    <Item2><Editor /></Item2>

                  </Grid>
                  <Grid
                    style={{
                      backGround: ` #259fe9`
                    }}
                    item xs={2} sm={4} md={4}>
                    <Item2>xs=2</Item2>

                  </Grid>

                </Grid>
              </Box>
            </Modal>
          </Card>

        );
      })}
    </>
  );
};

export default ItemCard;