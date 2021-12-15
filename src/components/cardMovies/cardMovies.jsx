import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesFavorite, deleteMoviesFavorite } from "../../redux/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export default function CardMovies(props) {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  // let [checked, setChecked] = React.useState(idFav?.includes(props.id) ? true : false);

  const aux = movies.Search.map((el) => el.imdbID);

  const [checked, setChecked] = useState(
    aux?.includes(props.imdbID) ? false : true
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked === false) {
      dispatch(
        addMoviesFavorite({
          title: props.Title,
          imdbID: props.imdbID,
          poster: props.Poster,
          type: props.Type,
          year: props.Year,
        })
      );
    } else {
      dispatch(deleteMoviesFavorite(props.imdbID));
    }
  };

  return (
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Card sx={{ maxWidth: 445, borderRadius:"30px" }}>
        <Link to={`/movies/${props.imdbID}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="550"
            image={props.Poster}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Title}
          </Typography>
          <Typography variant="h6" component="div">
            {props.Type}
          </Typography>
          <Typography variant="h6" component="div">
            {props.Year}
          </Typography>
        </CardContent>
        <CardActions>
          {props.numero === 1 ? (
            <Checkbox
              checked={checked}
              onChange={handleChange}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          ) : (
            <IconButton>
              <DeleteIcon
                onClick={() => dispatch(deleteMoviesFavorite(props.imdbID))}
              />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Stack>
  );
}
