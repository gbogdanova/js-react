import { useState } from "react";

export default function Player({initialName, symbol, isActive, handleName}){
  const [name, setName] = useState(initialName);
  const [isEditting, setIsEditing] = useState(false);

  function handleEditing(){
    setIsEditing((editing) =>!editing);

    if(isEditting){
      handleName(symbol, name);
    }
  }

  function handleChange(event){
    setName(event.target.value);
  }

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditting ? (<input type="text" required value={name} onChange={handleChange}/>):(<span className="player-name">{name}</span>)}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditting ? 'Save':'Edit'}</button>
    </li>
  )
}