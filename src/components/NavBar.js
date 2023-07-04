import React from "react";
import { createPortal } from "react-dom";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((l) => {
    return <a href={`#`+l} key={l}>{l}</a>;
  });

  return (
    <nav>
    { 
      linkElements
    }
    </nav>
  );
}

export default NavBar;