import React from 'react';
import B from './B';

const A = () => {

    const myName = "Ninad Samant";
    const myAge = 24;
    const myHobby =  "football";

  return (
    <B name={myName} age={myAge} hobby={myHobby}/>
  )
}

export default A;