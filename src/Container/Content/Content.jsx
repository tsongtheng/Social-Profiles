import React from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../../components/Card/Card";
import Profiles from "../../Profiles/Profiles";

import "./Content.css";

const Shuffle = (o) => {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

const Content = () => {
  console.log(Profiles[0].imageLink);
  return (
    <div className="app__content section__padding">
      {Shuffle(Profiles).map((obj, key) => (
        <Card key={uuidv4()} obj={obj} />
      ))}
    </div>
  );
};

export default Content;
