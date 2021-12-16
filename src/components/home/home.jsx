import React, {useEffect} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from "../searchBar/searchBar";
import CardMovies from "../cardMovies/cardMovies";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
export default function Home(props) {
    const movies = useSelector(state => state.movies);
    props.setTitulo("DELLACQUA MOVIES");

    console.log(movies.Search.length);
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
            <h1>WELCOME</h1>
            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
            <SearchBar />
            </div>

          </Stack>
      </div>
      <div>
      <Box sx={{ width: '100%', marginTop:"50px" }}>
      <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              movies && movies.Search && movies.Search.map(movie => {
                  return(
                    <Grid item xs={4} sm={4} md={4} >
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
