import userModel from "../model/userModel";
import { Request, Response} from 'express'


const getAllUser = async (req: Request, res: Response):Promise<Response> => {
    try {

        const getAll = await userModel.find()

        return res.status(200).json({
            message: "users gotten succesfully",
            data: getAll
        })
        
    } catch (error) {
        return res.status(400).json({
            message: "error getting users",
            data: error
        })
    }
}

const getOneUser = async (req: Request, res: Response):Promise<Response> => {
    try {

        const getOne = await userModel.findById(req.params.id)

        return res.status(200).json({
            message: "users gotten succesfully",
            data: getOne
        })
        
    } catch (error) {
        return res.status(400).json({
            message: "error getting user",
            data: error
        })
    }
}


const registerUser = async (req: Request, res: Response):Promise<Response> => {
    try {
        const {name, email, password} = req.body;

        const newUser = await userModel.findOne({ email })

        if (newUser) {
            return res.status(400).json({
            message: "user with email already exist"
        })
        } else {

            const regUser = await userModel.create({
                name,
                email,
                password
            })

            return res.status(200).json({
                message: "user created successfully",
                data: regUser
            })
        }
        

    } catch (error) {
        return res.status(400).json({
            message: "an error occured"
        })
    }
}

export { getAllUser, getOneUser, registerUser }