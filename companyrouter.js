import express from"express"
import{createcompany,getcompanybyid} from '../controllers/compnany controller.js';
const companyRouter=express.Router();
companyRouter.post("/companies",createcompany)
companyRouter.get("/companies/:id",getcompanybyid)
export default companyRouter;