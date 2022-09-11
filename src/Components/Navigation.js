import React from "react";
import classes from "./Navigation.module.css";
import sjc from "../sjc.jpg";
const Navigation = () => {
  return (
    <React.Fragment>
      <nav>
        <div className={classes.container}>
          <h2>ICRTCEIS</h2>
          <div className={classes.main}>
            <span>About</span>
            <span>Call for Papers</span>
            <span>Committes</span>
            <span>Paper Submission</span>
            <span>Important Dates</span>
            <span>Registartion</span>
            <span>Contacts</span>
          </div>
        </div>
      </nav>
      <div className={classes.imgmain}>
        <img src={sjc} className={classes.img} />
      </div>
    </React.Fragment>
  );
};
export default Navigation;
