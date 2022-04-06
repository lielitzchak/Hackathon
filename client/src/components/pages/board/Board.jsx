import { useContext, useLayoutEffect,useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { GetJobById } from "../../../services/Job-service";
import "./board.css";

const Board = () => {
    const { user, jobs, setJobs } = useContext(UserContext);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
            GetJobById(userData._id).then(res => {
                // console.log(res);
                setJobs(res.data);
            })
        console.log(user);
        console.log(jobs);
    }, [])
    return (
        <div className="main">
            <h1 className="board-title">{user.firstName} {user.lastName} Board</h1>
            <table className="table-board">
                <thead>
                    <tr>
                        <th className="sticky-td">jobName</th>
                        <th>userId</th>
                        <th>role</th>
                        <th>companyName</th>
                        <th>contentName</th>
                        <th>contentPhone</th>
                        <th>contentEmail</th>
                        <th>applyDate</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        jobs.length > 0 &&
                        jobs.map((job, index) => {
                            return (
                                <tr key={index}>
                                    <td className="sticky-td">{job.jobName}</td>
                                    <td>{job.userId}</td>
                                    <td>{job.role}</td>
                                    <td>{job.companyName}</td>
                                    <td>{job.contentName}</td>
                                    <td>{job.contentPhone}</td>
                                    <td>{job.contentEmail}</td>
                                    <td>{job.applyDate}</td>
                                    <td>{job.status}</td>
                                </tr>
                            )
                        })
                    } */}


                    <tr>
                        <td className="sticky-td">jobName</td>
                        <td>userId</td>
                        <td>role</td>
                        <td>companyName</td>
                        <td>contentName</td>
                        <td>contentPhone</td>
                        <td>contentEmail</td>
                        <td>applyDate</td>
                        <td>status</td>
                    </tr>
                    <tr>
                        <td className="sticky-td">jobName</td>
                        <td>userId</td>
                        <td>role</td>
                        <td>companyName</td>
                        <td>contentName</td>
                        <td>contentPhone</td>
                        <td>contentEmail</td>
                        <td>applyDate</td>
                        <td>status</td>
                    </tr>
                    <tr>
                        <td className="sticky-td">jobName</td>
                        <td>userId</td>
                        <td>role</td>
                        <td>companyName</td>
                        <td>contentName</td>
                        <td>contentPhone</td>
                        <td>contentEmail</td>
                        <td>applyDate</td>
                        <td>status</td>
                    </tr>
                    <tr>
                        <td className="sticky-td">jobName</td>
                        <td>userId</td>
                        <td>role</td>
                        <td>companyName</td>
                        <td>contentName</td>
                        <td>contentPhone</td>
                        <td>contentEmail</td>
                        <td>applyDate</td>
                        <td>status</td>
                    </tr>
                    <tr>
                        <td className="sticky-td">jobName</td>
                        <td>userId</td>
                        <td>role</td>
                        <td>companyName</td>
                        <td>contentName</td>
                        <td>contentPhone</td>
                        <td>contentEmail</td>
                        <td>applyDate</td>
                        <td>status</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Board;