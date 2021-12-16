import axios from "axios";
import {
  GET_MOVIES,
  ADD_MOVIES_FAVORITE,
  DELETE_MOVIES_FAVORITE,
  DETAIL_MOVIE,
  DELETE_ALL_FAVORITE,

} from "./actionTypes";


const apikey = process.env.REACT_APP_API_KEY;
export function getMovies(titulo) {
  return async function (dispatch) {
    try {
      let res = await axios(
        `https://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`
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
        `https://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`
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

export function deleteAllFavorite() {
  return {
    type: DELETE_ALL_FAVORITE,
    payload: [],
  };
}