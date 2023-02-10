import React from "react";
import "./About.css";

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
          <p>
            Culture makes people understand each other better. And if they
            understand each other better in their soul, it is easier to overcome
            the economic and political barriers. But first they have to
            understand that their neighbour is, in the end, just like them, with
            the same problems, the same questionsA people without the knowledge
            of their past history, origin and culture is like a tree without
            roots The equal right of all citizens to health, education, work,
            food, security, culture, science, and wellbeing - that is, the same
            rights we proclaimed when we began our struggle, in addition to
            those which emerge from our dreams of justice and equality for all
            inhabitants of our world - is what I wish for all The fact is, when
            men carry the same ideals in their hearts, nothing can isolate them
            - neither prison walls nor the sod of cemeteries. For a single
            memory, a single spirit, a single idea, a single conscience, a
            single dignity will sustain them all If you have men who will
            exclude any of God's creatures from the shelter of compassion and
            pity, you will have men who will deal likewise with their fellow
            men.
          </p>
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
          <h1>Our Humanity</h1>
          <p>
            When the world feels heavy, it's easy to question whether it's
            worthwhile to have faith in humanity. Our team of journalists spends
            each day look at the day's most heartbreaking news stories — but as
            a positive news media company, we do things a bit differently Every
            one of us is, in the cosmic perspective, precious. If a human
            disagrees with you, let him live. In a hundred billion galaxies, you
            will not find anotherSometimes we’re fractured by the choices we
            make; sometimes we’re shattered by things we would never have
            chosen. But our brokenness is also the source of our common
            humanity, the basis for our shared search for comfort, meaning, and
            healing. Our shared vulnerability and imperfection nurtures and
            sustains our capacity for compassion For me, forgiveness and
            compassion are always linked: how do we hold people accountable for
            wrongdoing and yet at the same time remain in touch with their
            humanity enough to believe in their capacity to be transformed If
            you judge people, you have no time to love them.
          </p>
          </div>       
        </div>
    </>
  );
};

export default About;
