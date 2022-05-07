import React from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";

function Header() {
  return (
    <header>
      <h1>
        <EventNoteIcon />
        <span className="header-element">My Notes</span>
      </h1>
    </header>
  );
}

export default Header;
