import React, { memo } from 'react';
import './Ball.css';

const Ball = memo(({ number }) => {
  let background;
  if (number < 10) {
    background = 'lightpink';
  } else if (number < 20) {
    background = 'navajowhite';
  } else if (number < 30) {
    background = 'lightseagreen';
  } else if (number < 40) {
    background = 'lightblue';
  } else {
    background = 'lavender';
  }
  return (
    <div className="ball" style={{ backgroundColor: background }}>
      {number}
    </div>
  );
});

export default Ball;
