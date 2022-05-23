import React from 'react'
import Moment from 'react-moment';

export default function GetTime() {
    const date = new Date();
    
  
    return (
      <div className="App">
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
      </div>
      )
}
