import axios from 'axios';

const URL = import.meta.env.VITE_DEV_URL;

export async function getUserById(userId) {
  const token = JSON.parse(localStorage.getItem('token'));
  const config = { headers: { Authorization: token } };
  const response = await axios.get(URL + 'users/id/' + userId, config);
  return response.data;
}

export async function editUserById(userId, update) {
  const token = JSON.parse(localStorage.getItem('token'));
  const config = { headers: { Authorization: token } };
  const response = await axios.put(URL + 'users/id/' + userId, update, config);
  return response.data;
}

export async function deleteUserById(userId) {
  const token = JSON.parse(localStorage.getItem('token'));
  const config = { headers: { Authorization: token } };
  const response = await axios.delete(URL + 'users/id/' + userId, config);
  return response.data;
}

export async function uploadAvatar(fmData) {
  const token = JSON.parse(localStorage.getItem("token"));
  const config = { headers: { Authorization: token } };
  const res = await axios.post('https://backend-nomadsociety-development.up.railway.app/users/avatar/', fmData, config);
  return res.data;
}

export async function toggleFollow(userId) {
  const token = JSON.parse(localStorage.getItem("token"));
  const config = { headers: { Authorization: token } };
  const response = await axios.post(URL + 'users/follow/' + userId, {}, config);
  return response.data;
}