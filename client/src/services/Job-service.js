const BASE_URL = "http://localhost:5000/job";

export const GetAllJobs = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
export const GetJobById = async (userId) => {
    const response = await fetch(`${BASE_URL}/${userId}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};

export const PostJob = async (job) => {
    const response = await fetch(`${BASE_URL}/post`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
    });
    const data = await response.json();
    return data;
};

export const putjob= async (job) => {
    const response = await fetch(`${BASE_URL}/put/${job.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
    });
    const data = await response.json();
    return data;
}

export const DeleteJob = async (job) => {
    const response = await fetch(`${BASE_URL}/delete/${job.id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};