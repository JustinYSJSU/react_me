import ResponsiveAppBar from "../components/Appbar"
import { Box, Typography, Avatar, Link } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
export const VideoReview = () => {
  const itemData = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/vodapp%2Fvod4.png?alt=media&token=ab6c547a-0a82-4d1a-b31f-53cf5d9310a1", 
      title: 'User Login', 
      desc: 'User Login Page. Users provide email and password.'
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/vodapp%2Fvod1.png?alt=media&token=88962dc4-dbf9-4b61-90c8-84a1e2481828",
      title: 'User Menu',
      desc: 'User Menu / Home Screen. Users can see all of their upload videos, and can sort them by various categories.'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/vodapp%2Fvod2.png?alt=media&token=b7a131b3-d2c0-41f7-9dd9-92838fe2f651',
      title: 'User Upload',
      desc: 'User Upload Screen. Users upload a video and provide game - specific information (Agent, Map, Win, Loss, etc) which can be used for filtering.'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/vodapp%2Fvod3.png?alt=media&token=9a01936a-62a3-4940-b1a5-d995a725d6d0',
      title: 'User Video and Notes',
      desc: 'User Video / Notes screen. Users pause video to add a note, and can categorize / sort notes to place emphasis on areas of improvement.'
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
          </Typography>
      </CardContent>
  </Card>
    )
  }

  return (
    <div>
      <ResponsiveAppBar position='fixed' />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
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
            Video Review Application
          </Typography>
          <Box sx={{flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              What It Is
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', marginLeft: '20px', textAlign: 'left', fontSize: '18px' }}>
              I developed a React application to help VALORANT players improve their analysis and gameplay skills. Users are able to upload videos of their gameplay
              and use a custom note taking system to annotate their videos. Videos and notes are able to be categorized and sorted in order to streamline improvement.
            </Typography>

            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              Technologies
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'left', fontSize: '18px', marginTop: '-10px' }}>
              <ul>
                <li>React.js</li>
                <li>Google Firebase</li>
                <li>MaterialUI</li>
                <li>CSS</li>
                <li>Figma</li>
              </ul>
            </Typography>

            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
               Process and Results
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', fontSize: '18px', marginLeft: '20px' }}>
              I first used Figma to develop UI / UX designs and prototypes. Once I found a designed I liked, I would begin implementation.
              For this project, I chose to use Google Firbase (Backend As a Service (BaaS)) technology due its ease of use and setup, as its ability to provide
              authentication and data storage.

              <br>
              </br>
              <br></br>
              When developing this project, my priority was to make the process convinient for users. I utilized React hooks (useEffect, useState) to fetch existing data and store /
              save data the user would enter as they used the site. I also made use of built in tools provided by Firebase, particulary its storage, database, and authentication features.
            </Typography>
          </Box>
        </Box>

        <Carousel sx={{marginLeft: '20px', marginTop: '50px', marginRight: '20px', border: '1px solid black', width: {xs: 450, m: 600, lg: 900, xl: 900}, height: {xs: 250, m: 300, lg: 450, xl: 450}, borderRadius: '20px'}}>            {
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