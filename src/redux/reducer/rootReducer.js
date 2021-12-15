import {GET_MOVIES, ADD_MOVIES_FAVORITE, DELETE_MOVIES_FAVORITE,DETAIL_MOVIE} from "../actions/actionTypes";

const initialState = {
    movies: [],
    moviesFavorite: [],
    movie:{}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case ADD_MOVIES_FAVORITE:
            return {
                ...state,
                moviesFavorite: [...state.moviesFavorite, action.payload]
            };
        case DELETE_MOVIES_FAVORITE:
            return {
                ...state,
                moviesFavorite: state.moviesFavorite.filter(movie => movie.imdbID !== action.payload)
            };
        case DETAIL_MOVIE:
            return {
                ...state,
                movie: action.payload
            };
        default:
            return state;

    }
}