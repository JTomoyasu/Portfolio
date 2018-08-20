import React from "react";

const Sidebar = () => (
    <div className="sidebar" data-spy="affix" data-offset-top="20">
        <h2 align="center">
            Connect with me
        </h2>
        <div className="row" align="center">
            <div className="col-sm-6">
                <a href="https://www.linkedin.com/in/joseph-tomoyasu-08a28ba4/">
                    <img src={require("./images/linkedin.png")} className="img-thumbnail" alt="" />
                </a>
            </div>
            {/* <div className="col-sm-4">
                <a href="https://stackoverflow.com/users/9282232/jtomoyasu?tab=profile/">
                    <img src={"images/stackoverflow.png"} className="img-thumbnail" alt="" />
                </a>
            </div> */}
            <div className="col-sm-6">
                <a href="https://github.com/JTomoyasu">
                    <img src={require("./images/github.png")} className="img-thumbnail" alt="" />
                </a>
            </div>
        </div>
    </div>
);

export default Sidebar;

