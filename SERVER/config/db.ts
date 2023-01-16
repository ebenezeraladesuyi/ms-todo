import mongoose from "mongoose"

const URI = "mongodb://localhost/msTodo"

mongoose.connect(URI)
mongoose.connection.on("open", () => {
    console.log("database connected")
}).once("error", (error) => {
    console.log("database not connected")
})