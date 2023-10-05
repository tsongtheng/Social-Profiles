import React from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../../components/Card/Card";
import Profiles from "../../Profile/Profiles";

import "./Content.css";

const Content = () => {
  console.log(Profiles[0].imageLink);
  return (
    <div className="app__content section__padding">
      {Profiles.map((obj, key) => (
        <Card key={uuidv4()} obj={obj} />
      ))}
    </div>
  );
};

export default Content;
