import React from "react";
import classes from "./Vision.module.css";
import dis from "../../dis.jpg";
const Vision = () => {
  return (
    <React.Fragment>
      <p className={classes.vip}>
        MISSION &<span>VISION</span>{" "}
      </p>
      <div className={classes.vision}>
        <p>
          Providing Students with a Sound Knowledge in Fundamentals of their
          branch of Study. Promoting Excellence in Teaching, Training, Research
          and Consultancy. Exposing Students to Emerging Frontiers in various
          domains enabling Continuous Learning. Developing Entrepreneurial
          acumen to venture into Innovative areas. Imparting Value based
          Professional Education with a sense of Social Responsibility.
        </p>
        <div>
          <img src={dis} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Vision;
