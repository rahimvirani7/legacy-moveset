import React from 'react'
import './../Pokemon/Pokemon.css';

function Moveset(props) {
  return <div className="move-table">
    <span className="d-md-none">&nbsp;</span>
    <ul>
    <li className={"header "+props.className}>{props.label}</li>
    {props.moveset.split(",").map((move, index) => {
      return (
        ( move.trim() === "Return" ?  null : <li className="moveset" key={index}>{move.trim()}</li> )
      )
    })}
    </ul>
  </div>
}

export default Moveset;

