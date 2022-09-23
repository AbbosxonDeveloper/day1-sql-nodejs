import { Router } from "express";
import controller from '../controller/user.controller.js'
const router = Router()

router.get('/users', controller.GET);
router.post("/users", controller.POST);
router.put("/users", controller.UPDATE);
router.delete("/users", controller.DELETE);



export default router