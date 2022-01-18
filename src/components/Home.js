import React from "react";
import { UserName } from "src/data/user.js"
import { city} from "src/data/user.js"
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
