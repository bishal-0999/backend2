import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Since .env is in your root folder, you can just call config() without a path
// Or explicitly use path: './.env'
dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();
        const { app } = await import("./app.js");
        const port = process.env.PORT || 8000;

        app.listen(port, () => {
            console.log(`server is running at port : ${port}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();
// import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import connectDB from "./db/index.js";

// // dotenv.config({
// //     path: './env'
// // })

// connectDB()







// import express from "express"

// const app = express()

// ( async  () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port $  ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()