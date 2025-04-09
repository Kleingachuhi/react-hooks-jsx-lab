import React from "react";
// import { name, city } from "../data/data.js";
const name = "Klein";
const city = "Nairobi"
function Home() {
  // update the JSX being returned!
  return( <div id="home"> 
  <h1 style={{color:"firebrick"}}>
    {name} is a Web Developer in {city}
     </h1>
  </div>
  );
}

export default Home;
