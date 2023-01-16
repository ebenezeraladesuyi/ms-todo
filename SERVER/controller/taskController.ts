import userModel from "../model/userModel";
import taskModel from "../model/taskModel";
import mongoose from "mongoose"
import { Request,Response } from "express"

const getTask = async (req:Request, res: Response):Promise<Response> => {
    try {
        const getAllTasks = await taskModel.find()

        return res.status(200).json({
            message: "found",
            data: getAllTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "tasks not found",
            data: error
        })
    }
}

//MyDay

const createTask = async (req: Request, res: Response):Promise<Response> => {
    try {

        const getUser = await userModel.findById(req.params.userID);

        if (getUser) {
            const {title, date} = req.body;
            let myDate = Date.now().toLocaleString();

            const creatingTask = await taskModel.create({
                title,
                date: date ? date : myDate,
                reminder: "",
                status: false,
                note: "",
            });

            await getUser?.myDay?.push(
                new mongoose.Types.ObjectId(creatingTask!._id)
            );
            await getUser?.tasks.push(
                new mongoose.Types.ObjectId(creatingTask._id)
            )

            getUser.save();

            return res.status(200).json({
                message: "tasks created",
                data: creatingTask
            })
        } else {
            return res.status(400).json({
                message: "user not found",
            })
        }
        
    } catch (error) {
        return res.status(400).json({
            message: "error creating",
            data: error
        })
    }
}

const delMyDay = async (req: Request, res: Response): Promise<Response> => {
    try {
        const delTask = await taskModel.find({date: Date.now() - Date.now() -1})
    } catch (error) {
        return res.status(400).json({
            message: "error",
            data: error
        })
    }
}


//Important

const createImp = async (req: Request, res: Response):Promise<Response> => {
    try {

        const getUser = await userModel.findById(req.params.userID);

        if (getUser) {
            const {title, date} = req.body;
            let myDate = Date.now().toLocaleString();

            const creatingTask = await taskModel.create({
                title,
                date: date ? date : myDate,
                reminder: "",
                status: false,
                note: "",
            });

            await getUser?.tasks.push(
                new mongoose.Types.ObjectId(creatingTask._id)
            )

            getUser.save();

            return res.status(200).json({
                message: "tasks created",
                data: creatingTask
            })
        } else {
            return res.status(400).json({
                message: "user not found",
            })
        }
        
    } catch (error) {
        return res.status(400).json({
            message: "error creating",
            data: error
        })
    }
}

//Planned

const createPlanned = async (req: Request, res: Response):Promise<Response> => {
    try {

        const getUser = await userModel.findById(req.params.userID);

        if (getUser) {
            const {title, date} = req.body;
            let myDate = Date.now().toLocaleString();

            const creatingTask = await taskModel.create({
                title,
                date: date ? date : myDate,
                reminder: "",
                status: false,
                note: "",
            });

            await getUser?.tasks.push(
                new mongoose.Types.ObjectId(creatingTask._id)
            )

            getUser.save();

            return res.status(200).json({
                message: "tasks created",
                data: creatingTask
            })
        } else {
            return res.status(400).json({
                message: "user not found",
            })
        }
        
    } catch (error) {
        return res.status(400).json({
            message: "error creating",
            data: error
        })
    }
}


export { getTask, createTask, createImp, createPlanned}