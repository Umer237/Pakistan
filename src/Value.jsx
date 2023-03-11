import React, {useState} from 'react'

const Value = () => {

const [Plus, SetNum] = useState(0)    
  return (
    <>
    <textarea>
       
    </textarea>
    <p>I am {Plus} </p>
    <button onClick={() => SetNum (Plus + 1)}>Click ME</button>
    </>
  )
}

export default Value