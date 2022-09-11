import React from "react";
import classes from "./About.module.css";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <h1>About Us</h1>
      </div>
      <div>
        <div className={classes.mission}>
          <h2>What is ICRTCEIS?</h2>
          <p>
            <b>
              International Conference on Recent Trends in Computational
              Engineering and Information Systems (ICRTCEIS-2022)
            </b>
            is intended to provide a common platform to the Research Scholars,
            Academicians, Scientists, Industrial Practitioners and Engineers in
            frontline evolutionary and challenging fields. ICRTCEIS–2022 will
            act as a premier forum for researchers and practitioners interested
            in advances and applications of Knowledge Engineering, Image
            Processing and Communication Systems. It is an opportunity to resent
            and observe the latest research trends and ideas in these areas.
            ICRTCEIS-2022 aims to strengthen relationships between Industries,
            Organizations and Institutions.
          </p>
          <h2>What is SJCSIT?</h2>
          <div className={classes.contain}>
            <AboutCard
              list={
                "35 years of excellence with relentless service to society imparting quality education."
              }
            />
            <AboutCard list={"3000+ Students and 24000+ alumni network."} />
            <AboutCard
              list={
                "200+ Experienced, well qualified and Passionate faculty with 50+ Doctorates and 90+ pursuing Ph.D"
              }
            />
            <AboutCard
              list={
                "Training and Expert Guidance on Technical Domains for Placement and Career Development with blended training model using automated training tools."
              }
            />
            <AboutCard
              list={
                "BGS-SJCIT Incubation foundation, IP Cell, EDC, CoEs, Student Excellence and Empowerment Development Center (SEED)."
              }
            />
            <AboutCard
              list={
                "BGS R&D Centre-BARC, NAIN-KITS, BOSCH REXROTH Automation Centre. Completed funded projects worth 3 crores and ongoing sponsored projects worth 1 crore."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
