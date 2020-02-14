import React from 'react';

const Player = props => {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.country}</p>
      <p>{props.searchInt}</p>
    </div>
  )
}

export default Player;