import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardMovies from "../cardMovies/cardMovies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteAllFavorite } from "../../redux/actions/index";
import Stack from "@mui/material/Stack";
export default function Favorite(props) {
  const dispatch = useDispatch();
  const moviesFavorite = useSelector((state) => state.moviesFavorite);
  // props.setTitulo("FAVORITE MOVIES");

 const deleteAll = () => {
    dispatch(deleteAllFavorite());
  }
 
  return (
    <div>
      {
        moviesFavorite.length > 0 ? 
      <Button onClick={deleteAll} sx={{marginTop:"10px"}} variant="contained" color="secondary">DELETE ALL</Button>
      :
      null
      }
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {moviesFavorite.length === 0 ? (
          <Grid item xs={12} sm={12} md={12}>
                  <h1> You have to add movies to your favorites </h1>
                  <Link to="/">
                    <Button variant="contained" color="secondary">
                      HOME
                    </Button>
                  </Link>
          </Grid>

          ) : (
            moviesFavorite.map((movie) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={movie.imdbID}>
                  <CardMovies
                    Title={movie.title}
                    Type={movie.type}
                    Year={movie.year}
                    Poster={movie.poster}
                    imdbID={movie.imdbID}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Box>
    </div>
  );
}
