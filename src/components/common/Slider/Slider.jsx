import { Slider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    thumb: {
      color: '#000',
    },
    rail: {
      color: `rgba(0, 0, 0, 0.26)`,
    },
    track: {
      color: '#000',
    },
  });
  
  const SliderProton = ({ value, changePrice }) => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Slider
          value={value}
          onChange={changePrice}
          valueLabelDisplay='on'
          min={1000}
          max={5000}
          classes={{
            thumb: classes.thumb,
            rail: classes.rail,
            track: classes.track,
          }}
        />
      </div>
    );
  };
  
  export default SliderProton;