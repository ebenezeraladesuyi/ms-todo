import mongoose from "mongoose"
import { userData } from "./allInterface"

interface user {
    name: string;
    email: string;
    password: string;
    myDay: any[];
    important: any | userData[];
    planned: any | userData[];
    assigned: any | userData[];
    tasks: any[]
}

interface iUser extends user, mongoose.Document{}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    myDay: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "myTasks"
        }
    ],
    important: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "myTasks"
        }
    ],
    planned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "myTasks"
        }
    ],
    assigned: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "myTasks"
        }
    ],
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "myTasks"
        }
    ],

})

const userModel = mongoose.model<iUser>("myUser", userSchema)

export default userModel