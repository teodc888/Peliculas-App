import React from "react";
import { useSelector } from "react-redux";
import CardMovies from "../cardMovies/cardMovies";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function Favorite() {
  const moviesFavorite = useSelector((state) => state.moviesFavorite);
  return (
    <div>
        <h1>FAVORITOS</h1>
 <Box sx={{ width: '100%', marginTop:"50px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {moviesFavorite &&
            moviesFavorite.map((movie) => {
              return (
                <Grid item xs={2} sm={4} md={4}>
                  <CardMovies
                    Title={movie.title}
                    Type={movie.type}
                    Year={movie.year}
                    Poster={movie.poster}
                    imdbID={movie.imdbID}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
