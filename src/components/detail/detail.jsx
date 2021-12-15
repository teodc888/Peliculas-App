import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { detailMovie } from "../../redux/actions";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailMovie(id));
  }, [dispatch, id]);

  const movie = useSelector((state) => state.movie);

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 445 }}>
              <CardMedia
                component="img"
                height="650"
                image={movie.Poster}
                alt="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card sx={{bgcolor:"#e1bee7", borderRadius:"20px" } } >
              <Typography gutterBottom variant="h2" component="div">
                {movie.Title}  ({movie.Year})
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {movie.Released} <ArrowRightIcon/> {movie.Genre} <ArrowRightIcon/>  {movie.Runtime}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <Rating
                  name="half-rating"
                  defaultValue={movie.imdbRating}
                  precision={0.2}
                  max={10}
                  size="large"
                  readOnly
                />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <h1>DESCRIPCION</h1>
                {movie.Plot}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <h1>ACTORES</h1>
                {movie.Actors}
              </Typography>
              <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={5.3}>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.Director}
                      <h4>DIRECTOR</h4>
                    </Typography>
                  </Grid>
                  <Grid item xs={5.3}>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.Writer}
                      <h4>ESCRITOR</h4>
                    </Typography>
                  </Grid>
                  <Grid item xs={5.3}>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.Type}
                      <h4>TIPO</h4>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
