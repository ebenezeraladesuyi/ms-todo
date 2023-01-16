import { registerUser, getAllUser, getOneUser } from "../controller/userController"
import { Router } from "express"

const router = Router()


router.route("/getallusers").get(getAllUser)
router.route("/getoneuser").get(getOneUser)
router.route("/registeruser").post(registerUser)


export default router
