import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { detailMovie } from "../../redux/actions";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export default function Detail(props) {
  const [time, setTime] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      dispatch(detailMovie(id));
      setTime(true);
    }, 3000);
  }, [dispatch, id]);

  const movie = useSelector((state) => state.movie);
  props.setTitulo(movie.Title);

  return (
    <div>
      {time === true ? (
        <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 445, marginTop: "9%" }}>
                <CardMedia
                  component="img"
                  height="650"
                  image={movie.Poster}
                  alt="green iguana"
                />
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ bgcolor: "#e1bee7", borderRadius: "20px" }}>
                <Typography gutterBottom variant="h2" component="div">
                  {movie.Title} ({movie.Year})
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  {movie.Released} <ArrowRightIcon /> {movie.Genre}{" "}
                  <ArrowRightIcon /> {movie.Runtime}
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
                <Typography gutterBottom variant="h5" component="div" >
                  <h1>DESCRIPTION</h1>
                  {movie.Plot}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  <h1>ACTORS</h1>
                  {movie.Actors}
                </Typography>
                <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                  <Grid
                    container
                    spacing={{ xs: 4, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>DIRECTOR</h4>
                        {movie.Director}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>WRITER</h4>
                        {movie.Writer}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>TIPE</h4>
                        {movie.Type}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ width: "100%", marginTop: "50px" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <img
                alt="j"
                display="inline-block"
                src="https://media4.giphy.com/media/vNACsqooIUmcjzd5xR/giphy.gif?cid=ecf05e471pqkcm12jptebnga2a7x288hf4gs4xuye2tad3m9&rid=giphy.gif&ct=s"
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
