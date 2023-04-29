import React from "react";

function Links({ home, github, linkedin }) {
  return (
    <div>
      <a href={home}>{home}</a>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
