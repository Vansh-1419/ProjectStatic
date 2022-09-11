import React from "react";
import classes from "./AboutCard.module.css";
const AboutCard = (props) => {
  return (
    <div className={classes.main}>
      <p>{props.list}</p>
    </div>
  );
};
export default AboutCard;
