import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  const moviesFavorite = useSelector((state) => state.moviesFavorite);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#e1bee7", color: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">
            <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration:"none" }}>
            {/* {
            props.titulo === "DELLACQUA MOVIES" ?
            <Link to="/about">
              {props.titulo}
            </Link> :
            props.titulo
            } */}
            <Link to="/about">
            DELLACQUA MOVIES
            </Link> 
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledBadge badgeContent={moviesFavorite.length}>
              <Link to="/favoritos">
                <FavoriteIcon />
              </Link>
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
