import React from "react";
import "./About.css";

import OC from "./images/Our-Culture.jpg";

export const About = () => {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
      </div>
      <div className="second-section">
        <div>
          <h1>Our Culture</h1>

          <p>
            Culture makes people understand each other better. And if they
            understand<br></br> each other better in their soul, it is easier to
            overcome the economic and<br></br> political barriers. But first they have to
            understand that their neighbour<br></br> is, in the end, just like
            them, with the same problems, the same questions<br></br> A people without
            the knowledge of their
            past history, origin and culture is<br></br> like a tree without roots The
            equal right of all citizens to health, education,<br></br> work,
            food, security, culture, science, and wellbeing - that is, the same
            rights we proclaimed when we began our struggle,<br></br> in
            addition to those which emerge from our dreams of justice and
            equality for all inhabitants of our world - is what<br></br> I wish
            for all The fact is, when men carry the same ideals in their hearts,
            nothing can isolate them - neither prison <br></br> walls nor the
            sod of cemeteries. For a single memory, a single spirit, a single
            idea, a single conscience, a single<br></br> dignity will sustain
            them all If you have men who will exclude any of God's creatures
            from the shelter of<br></br> compassion and pity, you will have men who will
            deal likewise with their fellow men.
          </p>
        </div>
        <div>
          <img src={OC} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
