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

export const ChatApp = () =>{
    const itemData = [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/chat%2Fchat1.png?alt=media&token=262247a4-a806-4172-bdc6-3aeb2aef6c42',
          title: 'Handling a sent message',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/chat%2Fchat2.png?alt=media&token=5312cf3f-28ac-471f-bb21-70c024337e50',
          title: 'Handling joining a conversation',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/chat%2Fchat3.png?alt=media&token=0738f891-2463-4a95-8de7-52fd78262ceb',
          title: 'Database representation of a message',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/chat%2Fchat4.png?alt=media&token=82dc86c1-741d-4187-8dc9-d574a465b46a',
          title: 'Server connection via JavaScript',
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
            Chat Application
          </Typography>
          <Box sx={{flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              What It Is
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', marginLeft: '20px', textAlign: 'left', fontSize: '18px' }}>
              A Python based chat application allowing up to 10 users to communicate over a local network. Applies knowledge of networking protocols and socket programming.
            </Typography>
            <Typography variant="h3" sx={{ marginLeft: '20px', marginTop: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              Technologies
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'left', fontSize: '18px', marginTop: '-10px'}}>
              <ul>
                <li>Flask</li>
                <li> MySQL </li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Amazon Web Services</li>
              </ul>
            </Typography>
            <Typography variant="h3" sx={{marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              Process and Results
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px',marginLeft: '20px', textAlign: 'left', fontSize: '18px' }}>
              I applied my knowledge of networking protocls (TCP / IP, HTTP) and socket programming. When developing the Flask backend, 
              I specified the HTTP methods (GET, POST) that were to be associated with each route. I also applied JavaScript in the frontend
              to handle connections to the sever when conecting to a chat room. One computer was designated as the "host" or "sever" and all 
              other computers in the conversation were connected to it via the local network.

              <br>
              </br>
              <br></br>
              I used the SocketIO library to listen to message events in the Flask backend. Upon "hearing" an event, the SocketIO listener would execute code 
              to place the message in the MySQL database, which was hosted over the cloud using Amazon Web Services.
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