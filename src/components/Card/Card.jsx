import React from "react";

import {
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

import "./Card.css";

const Card = ({ obj }) => {
  const [xLink, setXLink] = React.useState();
  const [facebookLink, setFacebookLink] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");
  const [linkedinLink, setLinkedinLink] = React.useState("");
  const [instagramLink, setInstagramLink] = React.useState("");

  const xClickHandler = () => {
    setXLink(obj.twitterLink);
  };

  const facebookClickHandler = () => {
    setFacebookLink(obj.facebookLink);
  };

  const githubClickHandler = () => {
    setGithubLink(obj.githubLink);
  };

  const linkedinClickHandler = () => {
    setLinkedinLink(obj.linkedinLink);
  };

  const instagramClickHandler = () => {
    setInstagramLink(obj.instagramLink);
  };

  return (
    <div className="app__card bg__card">
      <div className="card__img">
        <a href={obj.imageLink}>
          <img src={obj.imageLink} alt={obj.name} />
        </a>
      </div>

      <p>{obj.name}</p>

      <div className="app__icons">
        {obj.twitterLink === "" ? (
          !(<FaXTwitter />)
        ) : (
          <a href={xLink} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="icons" onClick={xClickHandler} />
          </a>
        )}

        {obj.facebookLink === "" ? (
          !(<FaFacebook />)
        ) : (
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icons" onClick={facebookClickHandler} />
          </a>
        )}

        {obj.githubLink === "" ? (
          !(<FaGithub />)
        ) : (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icons" onClick={githubClickHandler} />
          </a>
        )}

        {obj.linkedinLink === "" ? (
          !(<FaLinkedin />)
        ) : (
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icons" onClick={linkedinClickHandler} />
          </a>
        )}

        {obj.instagramLink === "" ? (
          !(<FaInstagram />)
        ) : (
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons" onClick={instagramClickHandler} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
