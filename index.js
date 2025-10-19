

import mongoose from 'mongoose' // npm i mongoose
import express from 'express' // npm i express
import userRouter from './routers/router.js'
import companyRouter from './routers/companyrouter.js'
// import user from './models/user.model.js'
// import {findandupdate,postuser,deleteuser,getusers} from './controllers/user.controller.js'

const app = express()

const databaseUrl = "mongodb+srv://parthchauhan:v6g47NMcp@cluster0.mongodb.net/text"


app.use(express.json())
app.use('/user', userRouter)
app.use('/company', companyRouter)

mongoose.connect(databaseUrl).then(()=>{
    app.listen(3000, () => {
  console.log('Server started on port 3000')
})

})
  
