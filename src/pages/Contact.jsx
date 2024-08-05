import { Box, Typography, Avatar, Link } from "@mui/material"
import { LinkedIn, TypeSpecimenTwoTone } from "@mui/icons-material"
import { Email } from "@mui/icons-material"

import ResponsiveAppBar from "../components/Appbar"
export const Contact = () =>{
    return(
        <div>
            <Box>
                <ResponsiveAppBar />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between', // Use space-between to maintain spacing
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start', // Align items to the start to avoid shifting
                    width: '50%',
                    overflow: 'auto', // Ensure content is scrollable
                    boxSizing: 'border-box',
                }}>

                   <Typography variant="h2" sx={{marginLeft: "20px", marginTop: "20px", textAlign: 'left', fontWeight: 'bold', fontSize: "35px"}}>
                        Contact Me
                    </Typography>

                    <Typography variant="h4" sx={{ marginTop: "10px", marginLeft: "20px", textAlign: 'left', fontSize: "18px" }}>
                        If you would like to speak to me further, please use one of the following contact methods and 
                        I will get back to you as soon as possible. 
                    </Typography>

                    <Box sx={{display: 'flex',
                    flexDirection: 'column',}}>

                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                          <a href="https://www.linkedin.com/in/justin-yamamoto-b9192824b/">
                            <LinkedIn sx={{ marginLeft: '10px', fontSize: 80 }}/> 
                          </a>
                          <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px',}}> LinkedIn </Typography>
                        </Box>
                        
                        
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                          <a href="mailto:jyamamoto2002@gmail.com">
                            <Email sx={{ marginLeft: '10px', fontSize: 80 }} />
                          </a>
                          <Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}> Email </Typography>
                        </Box>
                    </Box>
            </Box>
            </Box>
        </div>
    )
}