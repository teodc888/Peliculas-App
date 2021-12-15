import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from "../searchBar/searchBar";
import CardMovies from "../cardMovies/cardMovies";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
export default function Home() {
    const movies = useSelector(state => state.movies);
    console.log(movies.Search)
  return (
    <div>
      <div>
          <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          >
            <div className="Inicio">
            <h1>BIENVENIDOS</h1>
            <h2>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h2>
            <SearchBar />
            </div>

          </Stack>
      </div>
      <div>
      <Box sx={{ width: '100%', marginTop:"50px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              movies && movies.Search && movies.Search.map(movie => {
                  return(
                    <Grid item xs={2} sm={4} md={4} >
                        <CardMovies 
                           Title={movie.Title}
                           Type={movie.Type}
                           Year={movie.Year}
                           Poster={movie.Poster}
                           imdbID={movie.imdbID}
                           numero={1}
                        />
                    </Grid>
                  )
              })
          }


      </Grid>
    </Box>
      </div>
    </div>
  );
}
