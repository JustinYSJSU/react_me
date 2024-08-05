import ResponsiveAppBar from "../components/Appbar"
import { Box, Typography, Avatar, Link } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const About = () =>{

    const coursework = [
        {
            code: 'CS 146',
            name: 'Data Structures and Algorithms',
        },
        {
            code: 'CMPE 131',
            name: 'Software Engineering I',
        },
        {
            code: 'CS 151',
            name: 'Object Oriented Programming',
        },
        {
            code: 'CS 149',
            name: 'Operating Systems',
        },
        {
            code: 'CMPE 120',
            name: 'Computer Architecture',
        },
        {
            code: 'CS 166',
            name: 'Information Security',
        },
        {
            code: 'CS 157A',
            name: 'Introduction to Database Management Systems',
        },
        {
            code: 'CMPE 187',
            name: 'Software Quality Engineering',
        },
        {
            code: 'CMPE 148',
            name: 'Computer Networks',
        },
        {
            code: 'CMPE 195A / B',
            name: 'Senior Design Project',
        },
        {
            code: 'CS 158B',
            name: 'Computer Network Management',
        },
        {
            code: 'CMPE 172',
            name: 'Enterprise Software Platforms'
        },
        {
            code: 'ISE 164',
            name: 'Human and Computer Interaction'
        }
    ]

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
            width: { xs: '100%', md: '50%' },
            overflow: 'auto',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h2" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: "35px" }}>
            About Me
          </Typography>

          <Typography variant="h4" sx={{ marginTop: '10px', textAlign: 'left', fontSize: "18px" }}>
            I am a recent graduate from San Jose State University with a Bachelor of Science in Software Engineering. I started at SJSU during the Fall 2020
            semester and graduated with Cum Laude honors in the Spring 2024 semester.
          </Typography>

          <br></br>
          <Typography variant="h4" sx={{ textAlign: 'left', fontSize: "18px" }}>
            During my time in college, I learned and developed a variety of technical and soft skills. Check out some of my most relevant coursework and
            <a href="/projects"> projects </a>.
          </Typography>
        </Box>

        <Box sx={{ marginLeft: {xs: '40%', m: '15%', lg: '10%', xl: '10%'}, position: 'relative', display: 'flex', alignItems: 'center'}}>
          <Box sx={{ position: 'absolute', top: '0.1px', display: { xs: 'none', sm: 'block' } }}>
            <Avatar sx={{ width: 400, height: 400 }} alt="Justin Yamamoto" src="https://firebasestorage.googleapis.com/v0/b/react-valorant.appspot.com/o/other%2FIMG_7183.jpg?alt=media&token=2ecd44fc-5861-40d1-a715-80deebeb7323" />
          </Box>          
        </Box>

      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: { xs: '100%', md: '50%' },
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="h3" sx={{ marginLeft: '20px', textAlign: 'left', fontWeight: 'bold', fontSize: "30px" }}>
            Coursework 
          </Typography>

          <TableContainer component={Paper} sx={{marginLeft: '20px', marginTop: '10px'}}>
            <Table sx={{minWidth: 500 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{font: 'Arial'}}> <Typography> SJSU Course Code  </Typography></TableCell>
                  <TableCell align="left"> <Typography> Course Name  </Typography> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coursework.map((row) => (
                  <TableRow key={row.code}>
                    <TableCell component="th" scope="row">
                      <Typography> {row.code} </Typography>
                    </TableCell>
                    <TableCell align="left"> <Typography> {row.name} </Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
    )
}