import { useState } from "react";
import './About.css'

const ReadmoreReadless = ({ limit,children }) => {
  
const text = children;

const [isReadMoreShown,setReadMoreShown] =
    useState(false)
  
 const toggleBtn = () =>{
    setReadMoreShown( prevState => !prevState)
 }   
    return (
    <>
      <div className="read-more-read-less">
        {isReadMoreShown ? text : text.substr(0, limit)}
        <button className="Read-Btn" onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : 'Read More'}</button>
 </div>
    </>
  );
};

export default ReadmoreReadless;
