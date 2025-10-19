import express from "express";
import{ postuser,getusers,findandupdate,deleteuser,finduser,getuserbyid,getusercompany} from'../controllers/user.controller.js'

const userRouter =express.Router()

userRouter.post("/users",postuser)

userRouter.get("/users",getusers)

userRouter.patch("/user/:id",findandupdate)

userRouter.delete("/user/:id",deleteuser)
userRouter.get("/users",finduser)
userRouter.get("/user/:id",getuserbyid)
userRouter.get("/user/:id",getusercompany)
export default userRouter
