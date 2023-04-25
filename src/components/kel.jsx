import React from 'react';
import  Box  from '@material-ui/core';
import Skeleton from '@mui/material/Skeleton';
import { yellow } from '@mui/material/colors';

const SkeletonText = () => {
  const colors = ['red', 'blue', 'brown', 'aqua']; // define an array of colors
  const gradient = `linear-gradient(to right, ${colors.join(', ')})`; // create a CSS gradient string

  return (
    
    <Skeleton
      sx={{ 
        backgroundImage: gradient, // use gradient as the background image
        backgroundClip: 'text', // clip text to the background image
        WebkitBackgroundClip: 'text', // for Safari
        color: 'transparent', // make text transparent
        fontWeight: 'bold', // set text weight to bold
        fontSize: '36px', // set text font size
        height: 118,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
        
      }}
      variant="text"
      width={980}
    >
      Naveen's Markdown Viewer
    </Skeleton>
  );
};

export default SkeletonText;


