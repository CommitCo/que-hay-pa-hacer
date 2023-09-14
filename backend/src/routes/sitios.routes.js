import { Router } from "express"
import { getSitios, createSitios, updateSitios, deleteSitios, getSitio, updateSitio } from "../controllers/sitios.controller.js"


const router = Router()

router.get('/sitios',getSitios)
router.get('/sitios/:id',getSitio)
router.post('/sitios',createSitios)
router.put('/sitios/:id',updateSitios)
router.patch('/sitios/:id',updateSitio)
router.delete('/sitios/:id',deleteSitios)

export default router