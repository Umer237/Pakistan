import React from "react";
import "./Section3.css";
import Br1 from'./images/Bridge-2.jpg'
import Br2 from'./images/Bridge-2.jpeg'
import LP from './images/Last-pic.png'

export const Section3 = () => {
  return (
    <>
    <div className="Bridges">
      <div className="section2background">
        <div className="Heading-text">
          <h1>The Journals</h1>
          <p>
            "Our favorite stories about public lands and opportunities  for you <br></br> to
            get involvedin protecting your outdoor experiences"
          </p>
        </div>
       
        <div className="row">
        <div className="colum">
          <img src={Br1} alt="" />
          <h3>FEB 08,  2023</h3>
          <h1>An Unforgtable</h1>
          <p>If you only have one day to visit Yosemite National Park<br></br> and you want to make the most out of it.</p>
        </div>
        <div className="colum">
          <img src={Br2} alt="" /> 
          <h3>FEB  08 2023</h3>
          <h1>Syphonies in Steel</h1>
          <p>If you only have one day to visit Yosemite National Park<br></br> and you want to make the most out of it.</p>
        </div>
      </div>
      <div className="last-image">
        <img src={LP} alt="" />
      </div>
      </div> 
      </div>
    </>
  );
};

export default Section3;
