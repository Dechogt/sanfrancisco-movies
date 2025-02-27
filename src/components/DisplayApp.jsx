import React from 'react'
import {Grid2 as Grid} from '@mui/material'
import MyMap from './Map'

  const DisplayApp= ()=> {

    return (
      <>
        <h1> SAN FRANCISCO MANAGE MOVIE</h1>
        <Grid
            container
            spacing={2}
            sx={{width:'99%', height:'600px', display:'flex', justifyContent:'center', border:'1px solid red', borderRadius: '20px'}}
        >
              <Grid
                sx={{width:'35%', border:'1px solid red' }}
              >
                  <h2>Que recherchez-vous? </h2>
              </Grid>
  
              <Grid
                sx={{width:'62%'}}
              >
                <MyMap />
              </Grid>
        </Grid>
      </>
    ) 
  }


export default DisplayApp