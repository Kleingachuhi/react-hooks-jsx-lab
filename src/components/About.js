import React from "react";
import { image } from "../data/data";

function About() {
  return( <div id="about"> 
  <h2>About me</h2>
  <p>This is me reacting</p>
  <img  alt="I made this" src={image}/>
  </div>);
}

export default About;
