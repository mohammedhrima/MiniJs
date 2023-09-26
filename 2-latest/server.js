// import express from "express";
// import { home } from "./out/home.js";
// import dotenv from "dotenv";
// const app = express();
// dotenv.config();

// const generateRandomName = () => {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     const charactersLength = characters.length;

//     let result = "";
//     for (let i = 0; i < 10; i++) {
//         const randomIndex = Math.floor(Math.random() * charactersLength);
//         const randomChar = characters.charAt(randomIndex);
//         result += randomChar;
//     }
//     return result;
// };

// app.get("/", (req, res) => {
//     let tag = home();
//     console.log(tag);
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Running at Port ${process.env.PORT}`);
// });
