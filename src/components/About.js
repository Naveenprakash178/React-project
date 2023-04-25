import React, { useState } from 'react';
import img1 from '../assets/pic1.jpg';
import img2 from '../assets/pic1.jpg';
import { Fade } from 'react-reveal';
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Godfather() {
  const [info, setInfo] = useState('');

  function handleClick(event) {
    event.preventDefault();
    setTimeout(() => {
      setInfo(
        'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.'
      );
    }, 1);
  }

  function handleClose() {
    setInfo('');
  }

  return (
    <div id="one">
      <img src={img1} />
      <div id="center">
        <Fade distance="20%" duration={1500}>
          <a href="#" onClick={handleClick}  >
            <h1 id="text" >
            <Fade bottom distance="20%" duration={4000}>
              <a href='#' onClick={handleClick}>GODFATHER</a>
              </Fade>
            </h1>
          </a>
          {info && (
            <Fade bottom distance="20%" duration={1500}>
              <Card sx={{ backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'revert-layer' }}>
                <CardHeader title="SYNOPSIS" sx={{ color: 'white' }} />
                <CardContent sx={{ color: 'white' }}>
                  <Typography variant="body1">
                    <h1
                      id="info"
                      style={{
                        color: 'white',
                        fontSize: '17px',
                        fontFamily: 'sans-serif'
                      }}>
                      {info}
                    </h1>
                    <a style={{color:'white',backgroundColor:'black'}} href='https://youtu.be/UaVTIH8mujA' target='_blank'>CLICK TO WATCH TRAILER</a>
                    <IconButton onClick={handleClose} style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 5, right: 5 }}>
  <CloseIcon />
</IconButton>
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          )}
        </Fade>
      </div>
    </div>
  );
}