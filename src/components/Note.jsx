import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id); // Handle the delete function
  }

  const currentDate = new Date();
  const displayDate = currentDate.toLocaleDateString("en-UK");

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <div className="date">Posted on {displayDate}</div>
    </div>
  );
}

export default Note;
