import React from "react";
import Timings from "./Timings";

export default function WeekDetails(props) {
  
  const WEEK_DAYS = {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
  };
  return (
    <div className="weekDetails">
      <div className="weekDays">
         
          <table>
            <tr>
                <td className="NameOfDays"> {WEEK_DAYS.Monday} <br/><span>{props.newWeek}</span> </td>
                <td><Timings/> </td>             
            </tr>
            <tr>
                <td className="NameOfDays"> {WEEK_DAYS.Tuesday} <br/><span>Date</span> </td>
                <td> <Timings/></td>                
            </tr>
            <tr>
                <td className="NameOfDays"> {WEEK_DAYS.Wednesday} <br/><span>Date</span> </td>
                <td><Timings/></td>                
            </tr>
            <tr>
                <td className="NameOfDays"> {WEEK_DAYS.Thursday} <br/><span>Date</span> </td>
                <td> <Timings/></td>                
            </tr>
            <tr>
                <td className="NameOfDays"> {WEEK_DAYS.Friday} <br/><span>Date</span> </td>
                <td> <Timings/></td>                
            </tr>
          </table> 
          </div>
      
    </div>
  );
}
