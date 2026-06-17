import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export const addStudent = (data) => API.post('/students', data);
export const getAllStudents = () => API.get('/students');
export const addSubject = (studentId, data) => API.post(`/students/${studentId}/subjects`, data);
export const getResult = (studentId) => API.get(`/students/${studentId}/subjects/result`);