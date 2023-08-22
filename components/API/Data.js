import axios from "axios";

// Use api when doing axios requests
// Import with: import api from "../API/Data";
// Exampel: await api.patch("/items/" + id,)

const api = axios.create({
  // For the moment i use a spesifick url because
  // the server will be hosted on the same computer.
  // Untill i get the server online on railway
  baseURL: "http://172.20.10.2:3000",
});

export default api;
