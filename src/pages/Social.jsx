import ResponsiveAppBar from "../components/Appbar"
import { Box, Typography, Avatar, Link } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Carousel from 'react-material-ui-carousel'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
export const Social = () =>{
    const itemData = [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/social%2Fsocial1.png?alt=media&token=e1486f7c-2d54-4f2a-b2b3-a11b7bc80115',
          title: 'Site Text Post Feed',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/social%2Fsocial2.png?alt=media&token=c7aa43c0-df8a-4ce0-8474-77c8307d9d00',
          title: 'Single Post View with Recommendations',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/social%2Fsocial3.png?alt=media&token=8aaf6531-563f-43ed-9140-99cc2a35e63e',
          title: 'Infinitely Nested Comments Section',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/social%2Fsocial4.jpg?alt=media&token=286b9d8a-d4f2-4f1f-935c-93f533d531b4',
          title: 'Presenting Live Demo',
        },
      ];
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
                overflow: 'auto',   
        maxHeight: '90%'
      };

          
      const [open, setOpen] = useState(false);
      const [selectedImg, setSelectedImg] = useState(null);
    
      const handleOpen = (img) => {
        setSelectedImg(img);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setSelectedImg(null);
      };

      function Item(props)
  {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
          sx={{ height: 400 }}
          image={props.item.img}
          title="chat"
          onClick={() => handleOpen(props.item.img)}
                style={{ cursor: 'pointer' }}
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "bold"}}>
              {props.item.title}
          </Typography>
          <Typography variant="h4" sx={{fontSize: '18px'}}>
              {props.item.desc}
          </Typography>
      </CardContent>
  </Card>
    )
  }

    return(
        <div>
             <ResponsiveAppBar position='fixed'/>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: { xs: '100%', md: '50%' },
            overflow: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h2" sx={{ marginLeft: '20px', marginTop: '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '35px' }}>
            Social Community Website
          </Typography>
          <Box sx={{flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px'}}>
              What It Is
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', marginLeft: '20px', fontSize: '18px'}}>
              For my senior capstone project, I led a team of 4 people in the development of a full stack web application. We developed a social community app where
              users had the ability to post videos and text regarding a variety of topics. Users also had the ability to send each other messages, and interact with each others 
              posts.
            </Typography>
            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              Technologies
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '-10px', textAlign: 'left', fontSize: '18px' }}>
              <ul>
                <li>MySQL</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>CSS</li>
              </ul>
            </Typography>
            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
               Process and Results
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', marginLeft: '20px', fontSize: '18px' }}>
              I created and maintained the documentation for this project. I developed entity relationship (ER) diagrams, as well as program flow and test case documentation. I was also in charge
              of maintaining communication to our project advisor in order to provide updates on progress and blocking issues.

              <br>
              </br>
              <br></br>
              When developing this project, I worked on developing the backend RESTFul API as well as the frontend with React. I developed a variety of features covering text posts and uesr comments, 
              but two of my favorite contributions were a nested comments section and post recommendations. 
              <br>
              </br>
              <br></br>

              I developed a nested comments section using recursive React components and MySQL foregin keys. This allowed users to reply infinitely to any comment on the website, allowing for more engaded
              and meaningful discussions. Each comment consisted of itself and all of its replies. And subsequently, each of those replies had its own content as well as replies. This relationship made it easy
              to develop a "parent - child" relationship between original comments and its replies, allowing for recursive rendering.

              <br>
              </br>
              <br></br>

              Lastly, I implemented a post recommendation system using Natural Language Processing (NLP), a part of machine learning. Each post is given a similarity score based on the words it contains, and their
              relevance when compared to all other posts in the site. Posts with similar scores are recommended to each other, allowing users to stay engaged and easily find content they are interested in.
            </Typography>
          </Box>
        </Box>

        <Carousel sx={{marginLeft: '20px', marginTop: '50px', marginRight: '20px', border: '1px solid black', width: 900, height: 450, borderRadius: '20px'}}>
            {
                itemData.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <img src={selectedImg} alt="Selected" style={{ width: '100%' }} />
          </Box>
        </Modal>

      </Box>
        </div>
    )
}