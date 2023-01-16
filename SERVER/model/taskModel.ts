import mongoose from "mongoose"

import { userData2 } from "./allInterface"

interface newTask extends userData2, mongoose.Document {}

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    date: {
        type: String
    },
    reminder: {
        type: String
    },
    note: {
        type: String
    },
    status: {
        type: Boolean
    },
    day: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myUser"
    },

});

export default mongoose.model<newTask>("myTasks", taskSchema)

// interface newImportant extend 