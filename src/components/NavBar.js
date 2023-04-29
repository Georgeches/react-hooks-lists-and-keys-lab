import React from "react";
import Links from "./Links";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}<Links home={links[0]}github={links[1]} linkedin={links[2]}/></nav>;
}

export default NavBar;
