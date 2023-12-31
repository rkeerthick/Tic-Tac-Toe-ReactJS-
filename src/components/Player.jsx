import React, { useState } from "react";

const Player = ({ name, symbol, isActive, handlePlayerNameChange }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
    isEditing && handlePlayerNameChange(playerName, symbol);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let buttonCaption = "Edit";
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;
