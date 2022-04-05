const BASE_URL = "http://localhost:5000/auth";

export const registerUser = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { 'Content-Type': 'application/json' }
  }
  return await fetch(`${BASE_URL}/register`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
};
export const loginUser = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { 'Content-Type': 'application/json' }
  }
  return await fetch(`${BASE_URL}/login`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
};