import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState, useEffect, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";


const locales = {
   "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
   format,
   parse,
   startOfWeek,
   getDay,
   locales, 
});


 let jobsStatus = [
      {
        title:"Hr interview at monday" ,
        start : new Date (2022,3,11) ,
        end : new Date(2022,3,11)
      } ,
      {
        title:"Offer at google" ,
        start : new Date (2022,3,3) ,
        end : new Date(2022,3,3)
      } ,
      {
        title:"denied by microsoft" ,
        start : new Date (2022,3,10) ,
        end : new Date(2022 ,3 , 10 )
      } 
];

const JobsCalender = () => {

   const [jobs, setJobs] = useState(jobsStatus);
   return (
      <>
      <Calendar style={{height:"80vh" , width:"70vw" ,  marginLeft: "15vw" , marginTop:"10vh"}} localizer={localizer} events={jobs} startAccessor="start" endAccessor="end"/>
      </>
   )
}

export default JobsCalender ;