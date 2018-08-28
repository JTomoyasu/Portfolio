import React from "react";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <div className="row">
      <div className="col-sm-6">
        <img src={require("../images/Profile-picture2.png")} className="img-thumbnail" alt="uh oh" />
      </div>
      <div className="col-sm-6">
        My name is Joseph Tomoyasu and I am a web developer with a background in Environmental Studies and Geography and an interest in history.
      </div>
    </div>
  </div>
);

export default Home;
