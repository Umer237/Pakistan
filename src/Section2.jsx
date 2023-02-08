import React from "react";
import "./Section2.css";
import BM from './images/BadshahiMosque.jpg'
import MP from './images/Minar-e-Pakistan.jpeg'
import HAT from './images/Hazrat-Ali-Tomb.jpg'

export const Section2 = () => {
  return (
    <>
      <div className="section2background">
        <div className="Heading-text">
        <h1>Let, Explore Pakistan</h1>
        <p>
          “Pakistan not only means freedom and independence but the Muslim
          Ideology <br></br> which has to be preserved  which has come to us as a precious
          gift"
        </p>
        </div>
        <div className="Monements">
        <div className="image-section">
            <img src={BM} alt="" />
            <h1>BADSHAHI MOSQUE</h1>
            <p>Lahore / Punjab</p>
        </div>
        <div className="image-section">
            <img src={MP} alt="" />  
            <h1>MINARA-E-PAKISTAN</h1>
            <p>Lahore / Punjab</p>
        </div>
        <div className="image-section">
            <img src={HAT} alt="" />  
            <h1>AL-AQSA-MOSQUE</h1>
            <p> Jerusalem / Najaf</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Section2;
