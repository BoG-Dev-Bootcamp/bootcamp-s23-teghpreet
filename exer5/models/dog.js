import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEntered: {
        type: Date,
        required: true
    },
    dateAdopted: {
        type: Date,
        default: null
    }
})

export default mongoose.model("Dog", dogSchema)