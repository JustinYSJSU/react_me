import { Box, Typography, Avatar, Link } from "@mui/material"
import ResponsiveAppBar from "../components/Appbar"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Preview } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
export const Home = () => {
  return (
    <div>
      <Box>
        <ResponsiveAppBar />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row', lg: 'row', xl: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: { xs: '100%', md: '50%', lg: '50%', xl: '50%' },
            overflow: 'auto',
            padding: '20px',
          }}
        >
          <Typography variant="h2" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '35px' }}>
            Hi, I'm Justin Yamamoto
          </Typography>

          <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', fontSize: '18px' }}>
            Cum Laude Software Engineering Graduate from San Jose State University.
          </Typography>

          <Box sx={{ flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'left', fontSize: '30px' }}>
              About Me
            </Typography>

            <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', fontSize: '18px' }}>
              I am a recent graduate from San Jose State University. I graduated with a Bachelor of Science in Software Engineering and earned
              the Cum Laude honors distinction (3.67 Cumulative GPA).
              Read more about me <Link sx={{ textAlign: 'left' }} href="/about"> here. </Link>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ marginLeft: '10%', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'absolute', top: '0.1px' }}>
            <Avatar sx={{ width: 350, height: 350 }} alt="Justin Yamamoto" src="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2FIMG_0082.jpg?alt=media&token=2b1550a2-9206-4b59-a9a9-a3f2fc8fd902" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: { xs: '100%', md: '50%' },
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h3" sx={{ marginLeft: '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '30px' }}>
          My Skills
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Typography variant="h4" sx={{ textAlign: 'left', fontSize: '18px', marginTop: "-10px" }}>
            <ul>
              <li> Java </li>
              <li> Python </li>
              <li> Flask </li>
              <li> JavaScript </li>
              <li> Node.js </li>
              <li> SQL </li>
              <li> HTML </li>
              <li> CSS </li>
            </ul>
          </Typography>

          <Typography variant="h4" sx={{ marginLeft: { xs: '0', md: '10%' }, textAlign: 'left', fontSize: '18px', marginTop: "-10px" }}>
            <ul>
              <li> React.js </li>
              <li> Express.js </li>
              <li> Flask </li>
              <li> Git </li>
              <li> MaterialUI </li>
              <li> Bootstrap </li>
              <li> AWS </li>
              <li> SocketIO </li>
            </ul>
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        width: '100%',
        overflow: 'auto',

        boxSizing: 'border-box'
      }}>
        <Typography variant="h2" sx={{ marginLeft: '20px', marginTop: '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '35px' }}>
          My Projects
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2Fc03d9a0a309efab3779d74bfdb082b363cef99e8-854x484.png?alt=media&token=407d64eb-be0a-43bf-b9fd-519f697f2b71"
                title="video review"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Video Review Application
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px' }}>
                    React application designed to help VALORANT players improve their skills.
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
                <a href="/videoreview">
                    <Button> Learn More </Button>
                </a>
                <a href="https://valorantvodreview.vercel.app/">
                    <Button> Demo </Button>
                </a>
            </CardActions>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2F72301087-2.jpg?alt=media&token=2103a903-fcf7-4ac3-9c5c-7a09f6efa5ef"
                title="social"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Social Community Site
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px' }}>
                    Full Stack Web application focused on community and connection. Developed with MySQL, Express.js, React.js, and Node.js
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
                <a href="/socialcomm">
                    <Button> Learn More</Button>
                </a>

                <a href="https://github.com/shyamvyas890/ASMREncyclopedia">
                    <Button> GitHub </Button>
                </a>
            </CardActions>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2Fspotify-playlist.jpeg?alt=media&token=4444ec66-97d6-4a80-9df3-65fc0a3baadd"
                title="spotify"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Spotify Summary
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px' }}>
                    React application to give users information on their top Spotify songs and artists.
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
                <a href="/spotify">
                    <Button> Learn More </Button>
                </a>

                <a href="https://github.com/JustinYSJSU/react_spotify">
                    <Button> GitHub </Button>
                </a>
            </CardActions>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2Fmaze.jpg?alt=media&token=e3bad8cf-cc33-471e-91db-641bd62c3776"
                title="maze"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Maze Generator and Solver
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px' }}>
                    Java program utilizing data structures and algorithms to generate and solve mazes.
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
                <a href="/mazegensolve">
                    <Button> Learn More </Button>
                </a>

                <a href="https://github.com/JustinYSJSU/MazeGenerator">
                    <Button> GitHub </Button>
                </a>
            </CardActions>
        </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2Fimages.jpg?alt=media&token=65cbef39-1853-4320-ad66-0d4f0e866139"
                title="chat"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                    Chat Application
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px' }}>
                    Python chat application allowing users to communicate over a local network
                </Typography>
            </CardContent>
            <CardActions sx={{ mt: 'auto' }}>
                <a href="/chatapplication">
                    <Button> Learn More </Button>
                </a>

                <a href="https://github.com/YueYingLee/CMPE-148">
                    <Button> GitHub </Button>
                </a>
            </CardActions>
        </Card>
    </Grid>
</Grid>
      </Box>
      <Typography variant="h2" sx={{ textAlign: 'left', marginLeft: '20px', fontWeight: 'bold', fontSize: "35px" }}>
        Contact Me
      </Typography>

      <Typography variant="h4" sx={{ marginLeft: '20px', textAlign: 'left', fontSize: "18px" }}>
        If you would like to speak to me further, please use one of the following contact methods and
        I will get back to you as soon as possible.
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <a href="https://www.linkedin.com/in/justin-yamamoto-b9192824b/">
            <LinkedIn sx={{ fontSize: 80, marginLeft: '10px' }} />
          </a>
          <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}> LinkedIn </Typography>
        </Box>


        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <a href="mailto:jyamamoto2002@gmail.com">
            <Email sx={{ fontSize: 80, marginLeft: '10px' }} />
          </a>
          <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}> Email </Typography>
        </Box>

      </Box>
    </div>
  )
}