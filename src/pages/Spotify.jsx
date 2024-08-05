import ResponsiveAppBar from "../components/Appbar"
import { Box, Typography, Avatar, Link } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Carousel from 'react-material-ui-carousel'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
export const Spotify = () =>{
    const itemData = [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/spotify%2Fspotify1.png?alt=media&token=15a5d08a-797e-4e35-bfd3-6c26a6921b76',
          title: 'User Select Menu',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/spotify%2Fspotify4.png?alt=media&token=d28523e3-58ee-47c9-b7bc-bb206817c7b6',
          title: 'User Select Options',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/spotify%2Fspotify2.png?alt=media&token=f9280471-ce4a-471b-adea-684ac046d741',
          title: 'Top Songs',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/spotify%2Fspotify3.png?alt=media&token=0029f2d2-295a-4cad-b2c3-8b00674a7b2a',
          title: 'Top Artists',
        }
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
              </Typography>
          </CardContent>
      </Card>
        )
      }
      
    return(
      <div>
      <ResponsiveAppBar position='fixed' />
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
            Spotify Summary
          </Typography>
          <Box sx={{flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              What It Is
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', marginLeft: '20px', textAlign: 'left', fontSize: '18px' }}>
            I developed a React application to allow Spotify users to see information about their top songs and artists. Users can select to see their
            top 10/15/20 songs or artists within the last month, 6 months, or all time. I used Implicit Grant Flow during the authentication process to ensure
            only users with valid Spoitfy accounts are allowed to access features of the site.
            </Typography>

            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              Technologies
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'left', fontSize: '18px', marginTop: '-10px' }}>
              <ul>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>CSS</li>
              </ul>
            </Typography>

            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
               Process and Results
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', fontSize: '18px', marginLeft: '20px' }}>
            I used Boostrap and CSS to develop a simple and clean user interface. I also used Implicit Grant Flow for official Spotify User Authentication. 
              After users have selected their criteria for viewing, I used the Axios library to make API calls to the official Spotify API. I parsed the appropriate data
              from the returned JSON data and displayed it in an easy to understand format for users. I utilized React hooks (useEffect, useState) to fetch existing user data and to handle the user search criteria.

              <br>
              </br>
              <br></br>
              When developing this project, my priority was to make the process quick and easy for users. The interface consists of an easy to understand form where users can select the category
              (song / artist), their preferred number of results (10 / 15 / 25), and their preferred time period (Month / 6 Months / Year)
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