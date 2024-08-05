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

export const Maze = () =>{
    const itemData = [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/maze%2Fmaze1.png?alt=media&token=54f674b9-8409-4730-8ce6-a942d225eaf7',
          title: '4x4 BFS Solution',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/maze%2Fmaze2.png?alt=media&token=fa95942f-5d89-4194-8baf-a9b3e2b30c15',
          title: '4x4 DFS Solution',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/maze%2Fmaze3.png?alt=media&token=8628fb45-fb44-47b4-94ce-cd322fa42faa',
          title: '10x10 BFS Solution',
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/maze%2Fmaze4.png?alt=media&token=b9c2a188-d460-469b-9046-8f9f74dec9c1',
          title: '10x10 DFS Solution',
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
            Maze Generator and Solver
          </Typography>
          <Box sx={{ marginTop: '20px', flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              What It Is
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', marginLeft: '20px', textAlign: 'left', fontSize: '18px' }}>
              A Java application that uses advanced knowledge of data structures, algorithms, and object oriented programming in order to create "perfect" mazes (only one solution)
              and solve them using the Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms. JUnit test cases are also executed in order
              to ensure algorithm and result correctness.
             </Typography>
            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px'}}>
              Technologies
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'left', marginTop: '-10px', fontSize: '18px' }}>
              <ul>
                <li> Java </li>
                <li> JUnit</li>
              </ul>
            </Typography>
            <Typography variant="h3" sx={{ marginTop: '20px', marginLeft: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              Process and Results
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px', marginLeft: '20px', textAlign: 'left', fontSize: '18px' }}>
              I first diagramed my process and initial algorithms on paper. This made it easy to visualize the results I was trying to achieve and make it easy 
              for me to trace through my own work and thought process. Once I was satisfied with my process, I began to implement it using Java. 

              <br>
              </br>
              <br></br>

              I broke the project up into several Java classes using my knowledge of object oriented programming. For example, I had a "MazeGenerator" class which would generate mazes for the program.
              I then had a "BFS_MazeSolver" class and a "DFS_MazeSolver" class which represented the two ways the maze was solved. Finally, I had a "MazeTester" class which would use instances of 
              all three previous classes in order to generate, solve, and check maze results.

              <br>
              </br>
              <br></br>

              When I encounted bugs or unexpected behavior, I would return to diagraming my thought process on paper to trace through the issues. I would also consult online resources to find techniques
              to solve syntax or display errors.

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