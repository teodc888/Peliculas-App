import React, { useState } from "react";
import { CardActions, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions";
export default function SearchBar() {
    const [movies, setMovies] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = e => {
        e.preventDefault();
        setMovies(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getMovies(movies));
        setMovies("");
    };


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <CardActions>
            <SearchIcon />

            <Input

            type='text'
            name='text'
            value={movies}
            placeholder="SEARCH..."
            onChange={e=>handleInputChange(e)}
            sx={{bgcolor:"#e1bee7", borderColor:"black", width:"100%", borderRadius:"10px", color:"black"}}
            />
        </CardActions>
      </form>
    </div>
  );
}
