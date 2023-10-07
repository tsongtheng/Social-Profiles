import React from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../../components/Card/Card";
import Profiles from "../../Profiles/Profiles";

import "./Content.css";

// SHUFFLE THE CARDS
const Shuffle = (o) => {
  for (
    let j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

// PUSH NEW CARDS INSIDE THE CONTENTS
let contents = [];

Shuffle(Profiles).map((obj, key) =>
  contents.push([<Card key={uuidv4()} obj={obj} />])
);

const Content = () => {
  return <div className="app__content section__padding">{contents}</div>;
};

export default Content;
