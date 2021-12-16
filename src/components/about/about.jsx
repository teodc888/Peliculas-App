import "./about.css";
import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Foto from "../../imagenes/miFOto.jpeg";
export default function About(props) {
    props.setTitulo("ABOUT ME");
  return (
    <div>
      <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
      >
       <Card 
       sx={{ bgcolor: "#e1bee7", marginTop: "20px", color:"black" }}
       >
         <CardContent>
            <Typography gutterBottom variant="h2" textAlign="center" component="div">
              ABOUT ME
            </Typography>
            <Typography gutterBottom variant="h5" textAlign="center" component="div">
              Aplicacion creada con ReactJs, Redux , Material UI y la API Omdbapi para la practica de la materia de Desarrollo de Aplicaciones Web.
            </Typography>

            <div className='card'>
          <img src={Foto} alt='Mateo Dellacqua' className='card__image' />
          <p className='card__name'>Mateo Dellacqua</p>
          <div>
            <div className='grid-child-posts'>Full-Stack Developer</div>
          </div>
          <ul className='social-icons'>
            <li>
              <a target='_blank' href='https://www.instagram.com/teodellacqua/'>
              <i class="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.linkedin.com/in/mateo-dellacqua-castro/'>
              <i class="fab fa-linkedin-in"> <FontAwesomeIcon icon={faLinkedin} /></i>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://github.com/teodc888'>
              <i class="fab fa-github"> <FontAwesomeIcon icon={faGithub} /> </i>
              </a>
            </li>
          </ul>
          <button className='btn draw-border'>
            <a className='contact-link' href='mailto:teodellacqua8@gmail.com'>
              Contact
            </a>
          </button>
        </div>
          </CardContent>
      </Card>
      </Stack>
    </div>
  );
}