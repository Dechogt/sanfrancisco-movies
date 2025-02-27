import React from 'react'
import {Grid2 as Grid, Box, TextField} from '@mui/material'
import MyMap from './Map'

  const DisplayApp= ()=> {

    return (
      <>
        <h1 style={{
          
          display:'flex',
          justifySelf:'center',
          fontFamily:'insaniburger',
          fontSize:'35px',
          color: 'green',
          
        }}> SAN FRANCISCO MOVIE MANAGER</h1>
        <Grid
            container
            spacing={2}
            sx={{width:'99%', display:'flex', justifyContent:'center'}}
        >
              <Grid
                container
                sx={{width:'35%', border:'2px solid green',  display:'flex', justifyContent:'center', alignContent:'center' , borderRadius: '20px', bgcolor:'#e9e2e24a' }}
              >
                <Box 
                  sx={{width:'380px', height:'50px', border:'2px solid #2218e1', display:'flex', justifyContent:'center', alignContent:'center', borderRadius:'35px' }}
                >
                  <TextField id="standard-basic" label="Quel film recherchez-vous?" variant="standard" sx={{ width:'88%', fontSize:'14px', fontFamily:'insaniburger', fontWeight:'bold'}}/>
                </Box>

              </Grid>

              <Grid
                sx={{width:'63%'}}
              >
                <MyMap />
              </Grid>
        </Grid>
      </>
    ) 
  }


export default DisplayApp