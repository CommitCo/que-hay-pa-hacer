import { Router } from "express"
import { getPlanes, createPlanes, updatePlanes, deletePlanes, getPlan, updatePlan } from "../controllers/planes.controller.js"


const router = Router()

router.get('/Planes',getPlanes)
router.get('/Planes/:id',getPlan)
router.post('/Planes',createPlanes)
router.put('/Planes/:id',updatePlanes)
router.patch('/Planes/:id',updatePlan)
router.delete('/Planes/:id',deletePlanes)

export default router