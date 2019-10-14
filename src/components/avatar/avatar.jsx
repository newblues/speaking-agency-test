import React from 'react';

import './avatar.css';

const Avatar = ({ name }) => {
  //
  // function to randomize avatar color depending on user name
  const stringToColor = string => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let colour = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += `00${value.toString(16)}`.substr(-2);
    }
    return colour;
  };
  // //
  return (
    <div>
      {' '}
      <div style={{ backgroundColor: stringToColor(name) }} className='circle'>
        <span className='initials'>{name.charAt(0)}</span>
      </div>
    </div>
  );
};

export default Avatar;
