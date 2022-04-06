import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const Board = () => {

    return (
        <div className="table-board-wrapper">
            <table className="table-board">
                <thead>
                    <tr>
                        <th>jobName</th>
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
                    <tr>
                        <td>jobName</td>
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
                        <td>jobName</td>
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
                        <td>jobName</td>
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
                        <td>jobName</td>
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
                        <td>jobName</td>
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