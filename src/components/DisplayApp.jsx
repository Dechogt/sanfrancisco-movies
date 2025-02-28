import React, { useState, useEffect } from 'react'
import { Grid2 as Grid, Box } from '@mui/material'
import MyMap from './Map'

const DisplayApp = () => {
  const [film, setFilm] = useState([]);
  const [userTyping, setUserTyping] = useState("")
  const [absFilm, setAbsFilm] = useState(null)
  const [userWant, setUserWant] = useState([])

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setFilm(data))
      .catch((error) => console.log("Erreur :", error))
  }, [])

  useEffect(() => {
    if (userTyping.trim() === "") {
      setUserWant([])
      return
    }
    const findfilm = film.filter((film) =>
      film.title.toLowerCase().includes(userTyping.toLowerCase())
    )
    setUserWant(findfilm)
  }, [userTyping, film])

  const userWantThis = (film) => {
    setAbsFilm(film)
    setUserTyping(film.title)
    setUserWant([])
  }

  const rechercher = (e) => {
    setUserTyping(e.target.value)
    setAbsFilm(null)
  }

  const afficheFilmUser = absFilm ? [absFilm] : film

  return (
    <>
      <h1 style={{
        display: 'flex',
        justifySelf: 'center',
        fontFamily: 'insaniburger',
        fontSize: '35px',
        color: 'green',
      }}>
        SAN FRANCISCO MOVIE MANAGER
      </h1>

      <Grid
        container
        spacing={2}
        sx={{
          width: '99%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Grid
          container
          sx={{
            width: '35%',
            border: '2px solid green',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: '20px',
            bgcolor: '#e9e2e24a'
          }}
        >

          <Box
            sx={{
              width: '70%',
              height: '50px',
              border: '2px solid green',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: '35px',
              position: 'relative'
            }}
          >

            <input
              type="text"
              placeholder='Quel film recherchez-vous?'
              value={userTyping}
              onChange={rechercher}
              style={{
                width: '100%',
                fontSize: '14px',
                fontFamily: 'montserrat',
                fontWeight: 'bold',
                color: 'green',
                border: "none",
                outline: "none",
                borderRadius: "35px",
                padding: "20px"
              }}
            />

            {userWant.length > 0 && (
              <ul
                style={{
                  listStyle: "none",
                  padding: "5px",
                  margin: "5px",
                  width: "100%",
                  maxHeight: "200px",
                  overflowY: "auto",
                  fontFamily: 'montserrat',
                  color: 'green',
                  backgroundColor: "#ffffffe",
                  position: "absolute",
                  top: "45px",
                  zIndex: 1
                }}
              >
                {userWant.map((film, index) => (
                  <li
                    key={index}
                    style={{ padding: "8px", cursor: "pointer" }}
                    onClick={() => userWantThis(film)}
                  >
                    {film.title}
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Grid>
        <Grid sx={{ width: '63%' }}>
          <MyMap film={afficheFilmUser} />
        </Grid>
      </Grid>
    </>
  )
}

export default DisplayApp
