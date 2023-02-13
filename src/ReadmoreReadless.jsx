import { useState } from "react";

const ReadmoreReadless = ({ limit, children }) => {
  
const text = children;
const litex = limit;

const [isReadMoreShown, setReadMoreShown] = useState(false)
  
 const toggleBtn = () =>{setReadMoreShown( prevState => !prevState)
 }   
    return (
    <>
      <div className="read-more-read-less">
        {isReadMoreShown ? children : text.substr(0, litex)}
        <button className="Read-Btn" onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : 'Read More'}</button>
 </div>
    </>
  );
};

export default ReadmoreReadless;
