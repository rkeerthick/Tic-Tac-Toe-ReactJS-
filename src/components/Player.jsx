import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };
    let buttonCaption = 'Edit';
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
      playerName = <input type="text" value={name} required />;
      buttonCaption = 'Save';
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
          <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;
