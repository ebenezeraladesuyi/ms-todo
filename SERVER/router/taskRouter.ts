import { createImp, createPlanned, createTask, getTask }  from "../controller/taskController"
import { Router } from "express"


const router = Router()

router.route("/createtask/:userID").post(createTask);
router.route("/getalltasks").get(getTask)
router.route("createimp/:userID").post(createImp)
router.route("createplan/:userID").post(createPlanned)

export default router