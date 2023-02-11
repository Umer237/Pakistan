import { useState } from "react";

const ReadmoreReadless = ({ children }) => {
  
const [isReadMoreShown.setReadMoreShown] =
    useState(false)
  
 const toggleBtn = () =>{
    setReadMoreShown( prevState => !prevState)
 }   
    return (
    <>
      <div className="read-more-read-less">
        {isReadMoreShown ? children : children. 
        substr(0, 200)}
        <button onClick={toggleBtn}>Read More</button>
 </div>
    </>
  );
};

export default ReadmoreReadless;
