import { Router } from "express"
import { getPlanes, createPlanes, updatePlanes, deletePlanes, getPlan, updatePlan } from "../controllers/planes.controller.js"


const router = Router()

router.get('/planes',getPlanes)
router.get('/planes/:id',getPlan)
router.post('/planes',createPlanes)
router.put('/planes/:id',updatePlanes)
router.patch('/planes/:id',updatePlan)|
router.delete('/planes/:id',deletePlanes)

export default router