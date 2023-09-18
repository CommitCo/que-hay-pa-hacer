import { Router } from "express"
import { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getUsuario, updateUsuario } from "../controllers/usuarios.controller.js"


const router = Router()

router.get('/usuarios',getUsuarios)
router.get('/usuarios/:id',getUsuario)
router.post('/usuarios',createUsuarios)
router.put('/usuarios/:id',updateUsuarios)
router.patch('/usuarios/:id',updateUsuario)
router.delete('/usuarios/:id',deleteUsuarios)

export default router