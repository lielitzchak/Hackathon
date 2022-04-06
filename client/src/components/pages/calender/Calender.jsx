import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useContext, useLayoutEffect } from "react";
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

const JobsCalender = () => {
   const {user , setUser , setJobs} = useContext(UserContext);
   useLayoutEffect(() => {
   const userData = JSON.parse(localStorage.getItem("user"))
   setUser(userData);
   GetJobById(userData._id)
   .then(data => setJobs(data))
   .catch(err => console.log(err));
   } 
   , [])
   return (
      <>
      <Calendar style={{height:"80vh" , width:"70vw" ,  marginLeft: "15vw" , marginTop:"5vh"}} localizer={localizer} events={""}  startAccessor="start" endAccessor="end"/>
      </>
   )
}

export default JobsCalender ;