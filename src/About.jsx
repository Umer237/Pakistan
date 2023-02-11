import React from "react";
import "./About.css";
import ReadmoreReadless from "./ReadmoreReadless";

import OC from "./images/Our-Culture.jpg";
import HT from "./images/Umbrela.jpg";

export const About = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
      </div>
      <div className="second-section">
        <div>
          <h1>Our Culture</h1>
          <div className="Read-para">
          <ReadmoreReadless 
            limit={100}
          >
            When the world feels heavy, it's easy to question whether it's
            worthwhile to have faith in humanity. Our team of journalists spends
            each day look at the day's most heartbreaking news stories but as
            a positive news media company, we do things a bit differently Every
            one of us is, in the cosmic perspective, precious. If a human
            disagrees with you, let him live. In a hundred billion galaxies, you
            will not find anotherSometimes we re fractured by the choices we
            make; sometimes we re shattered by things we would never have
            chosen. But our brokenness is also the source of our common
            humanity, the basis for our shared search for comfort, meaning, and
            healing. Our shared vulnerability and imperfection nurtures and
            sustains our capacity for compassion For me, forgiveness an
          </ReadmoreReadless>
          </div>
        </div>
        <div>
          <img src={OC} alt="" />
        </div>
      </div>
      <div className="second-section-2">
        <div className="Img ">
          <img src={HT} alt="" />
        </div>
        <div>
          <div className="Read-para">
          <h1>Our Humanity</h1>
          <ReadmoreReadless>
            When the world feels heavy, it's easy to question whether it's
            worthwhile to have faith in humanity. Our team of journalists spends
            each day look at the day's most heartbreaking news stories but as
            a positive news media company, we do things a bit differently Every
            one of us is, in the cosmic perspective, precious. If a human
            disagrees with you, let him live. In a hundred billion galaxies, you
            will not find anotherSometimes we re fractured by the choices we
            make; sometimes we re shattered by things we would never have
            chosen. But our brokenness is also the source of our common
            humanity, the basis for our shared search for comfort, meaning, and
            healing. Our shared vulnerability and imperfection nurtures and
            sustains our capacity for compassion For me, forgiveness an
          </ReadmoreReadless>
          </div>
        </div>
      </div>
    </>
  );
};


export default About;
