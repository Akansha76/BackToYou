import http from "./http";

// export const signUp = async (data) => {
//   const response = await http.post("/user/signup", data);
//   return response.data;
// };

// export const login = async (data) => {
//   const response = await http.post("/user/login", data);
//   return response.data;
// };
// src/service/userApi.js
export const signUp = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "test@example.com") {
        reject({ response: { data: { message: "User already exists" } } })
      } else {
        resolve({ message: "Registered successfully!" })
      }
    }, 1000)
  })
}
