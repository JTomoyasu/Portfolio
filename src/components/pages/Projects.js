import React from "react";

const Projects = () => (
  <div>
    <h1>Projects Page</h1>
    <div className="row-nightout">
      <div className="col-sm-8">
        <a href="https://pig-group.github.io/Nightout/">
          <img src={require("../images/Nightout.png")} className="img-thumbnail" alt="uh oh" />
        </a>
      </div>
      <div className="col-sm-4">
        <p>
          The Nightout site allows a user to plan out a night out. The user can put in keywords, a date range, a and city/zip code. The user can then look at restaurants, lodging, and parking near the event location.
          <br/>
          Github Page: <a href="https://github.com/Pig-Group/Nightout">Nightout</a>
        </p>
      </div>
    </div>
    <br />
    <div className="row-the-crows-nest">
      <div className="col-sm-8">
        <a href="https://protected-lowlands-74290.herokuapp.com/">
          <img src={require("../images/Crows-Nest.png")} className="img-thumbnail" alt="uh oh" />
        </a>
      </div>
      <div className="col-sm-4">
        The Crows Nest site allows users to sign up, view and filter a newsfeed, make a community, and participate in community forums.
        <br/>
        Github Page: <a href="https://github.com/Belgian-Waffles/The-Crows-Nest">The Crows Nest</a>
      </div>
    </div>
    <br />
    <div className="row-stock-up">
      <div className="col-sm-8">
        <img src={require("../images/Stock-Up.png")} className="img-thumbnail" alt="uh oh" />
      </div>
      <div className="col-sm-4">
        The Stock Up site allows users to make and modify a stock profile. The site uses the IEX API to get current stock pricing information. It stores the prices that stocks were purchased at allows users to simulate buying and selling stocks at their current prices.
        <br/>
        Github Page: <a href="https://github.com/Team-Za/Cheese">Stock Up</a>
      </div>
    </div>
  </div>
);

export default Projects;
