import { MongoClient } from "mongodb";
import dotenv from "dotenv";
//using dotenv.config to store the mongodb connection string in .env file
dotenv.config();

const MONGO_URL=process.env.MONGO_URL
// process.env.MONGO_URL;
// 'mongodb://localhost:27017'
// process.env.MONGO_URL;
//connecting database
async function dbConnection(){
    try {
        //passing the connection string to the mongoClient
        const client=new MongoClient(MONGO_URL);
        await client.connect();
        console.log("database connected");
        return client;
    } catch (error) {
        console.log("error connecting to the database")
    }
}

export const client=await dbConnection();