import express, { Application, Request, Response } from "express"
const port = 6000
const app: Application = express()
import cors from "cors"
require("../config/db")
import userRouter from "../router/userRouter"
import taskRouter from "../router/taskRouter"

app.use(cors)
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "server up"
    })
})

app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)

app.listen(port, () => {
    console.log(`listening on  port: ${port}`)
})