import axios from "axios";
import {
  GET_MOVIES,
  ADD_MOVIES_FAVORITE,
  DELETE_MOVIES_FAVORITE,
  DETAIL_MOVIE,
} from "./actionTypes";

export function getMovies(titulo) {
  return async function (dispatch) {
    try {
      let res = await axios(
        `http://www.omdbapi.com/?apikey=9b3dccb0&s=${titulo}`
      );

      return dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addMoviesFavorite(payload) {
  return {
    type: ADD_MOVIES_FAVORITE,
    payload,
  };
}

export function deleteMoviesFavorite(idMovie) {
  return {
    type: DELETE_MOVIES_FAVORITE,
    payload: idMovie,
  };
}

export function detailMovie(idMovie) {
  return async function (dispatch) {
    try {
      let res = await axios(
        `http://www.omdbapi.com/?apikey=9b3dccb0&i=${idMovie}`
      );
      return dispatch({
        type: DETAIL_MOVIE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
