import ResponsiveAppBar from "../components/Appbar"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { ReadMore } from "@mui/icons-material";
import { Grid } from '@mui/material';
import { Preview } from "@mui/icons-material";
export const Projects = () =>{
    return(
        <div>
            <ResponsiveAppBar />
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

        </div>

    )
}