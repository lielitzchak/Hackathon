import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useContext, useEffect, useLayoutEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { UserContext } from "../../../contexts/UserContext";
import { GetJobById } from "../../../services/Job-service";

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
let jobs = [
   {title:"Wiz-tech interview" , start:new Date(2022 , 3 , 22) , end:new Date(2022 , 3 , 22)},
   {title:"Hibob-Hr Interview" , start:new Date(2022 , 3 , 12) , end:new Date(2022 , 3 , 12)},
   {title:"Google-Home task" , start:new Date(2022 , 3 , 4) , end:new Date(2022 , 3 , 4)},
]


const JobsCalender = () => { 
   const {setJobs , jobs } = useContext(UserContext);
    useEffect(() => {
     const userData = JSON.parse(localStorage.getItem("user"));
     GetJobById(userData._id)
     .then(data => {
        console.log(data)
      }).catch(data=>{
         console.log(data);
      })
    } , [])
   
   return (
      <>
      <Calendar style={{height:"80vh" , width:"70vw" ,  marginLeft: "15vw" , marginTop:"5vh"}} localizer={localizer} events={jobs}  startAccessor="start" endAccessor="end"/>
      </>
   )
}

export default JobsCalender;
