import { useState } from "react";
import "./App.css";
import GetTime from "./components/GetTime";
import Timezone from "./components/Timezone";
import WeekDetails from "./components/WeekDetails";

function App() {
  const [week, setWeek] = useState()
  const HandleChange = () =>{
    
    const newDate = new Date()
    let updateWeek = `${newDate.getDate()+7}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
    console.log(updateWeek)
    return setWeek(updateWeek)
  }
  const HandleChangeP = () =>{
    
    const newDate = new Date()
    let updateWeek = `${newDate.getDate()-7}/${newDate.getMonth()-1}/${newDate.getFullYear()}`;
    console.log(updateWeek)
    return setWeek(updateWeek)
  }
  return (
    <div className="App">
      <div className='week'>
       <div className="prevWeek"><button onClick={HandleChangeP}>Previous Week</button> </div>
       <GetTime/>
       <div className="nextWeek"> <button onClick={HandleChange}>Next Week</button> </div>
    </div>      
      <Timezone />
      <WeekDetails newWeek = {week} />
    </div>
  );
}

export default App;
