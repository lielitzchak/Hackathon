import { useState } from "react";

const AddJob = () => {
  const [newJob, setNewJob] = useState({});
  const saveInformation = (event) => console.log(event.target.value);
  const sendInfo = (event) => console.log(event.target.value);
  return (
    <div>
      <form onClick={sendInfo}>
        <input
          onChange={(event) => saveInformation(event)}
          name="jobName"
          placeholder="job Name"
          type="text"
        />
        <input name="userId" placeholder="userId" type="text" />
        <input name="role" placeholder="role" type="text" />
        <input name="companyName" placeholder="companyName" type="text" />
        <input name="contentName" placeholder="contentName" type="text" />
        <input name="contentPhone" placeholder="contentPhone" type="number" />
        <input name="contentEmail" placeholder="contentEmail" type="text" />
        <button>add job!</button>
      </form>
    </div>
  );
};
export default AddJob;
