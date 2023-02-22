import mongoose from "mongoose";
import Dog from "../models/dog.js"

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bootcamp-test")
        await Dog.deleteMany({})
        console.log("Sucessfully connected to the database!")
    } catch (e) {
        console.log("Failed to connect to the database :(")
    }
}

const closeDB = async () => {
    await mongoose.connection.close();
    console.log("Connection Closed.");
}
export { connectDB, closeDB };