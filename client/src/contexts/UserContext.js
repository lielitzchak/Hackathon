import { createContext, useState , useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { GetJobById } from '../services/Job-service';


export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [jobs , setJobs] = useState([]);

    useEffect(() => {
       if(localStorage.token) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ ...decoded.user, isLogin: true });
        localStorage.setItem("user" , JSON.stringify(decoded.user))
       }
        } , [])

    
    return (
        <UserContext.Provider value={{ user, setUser , jobs, setJobs }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;