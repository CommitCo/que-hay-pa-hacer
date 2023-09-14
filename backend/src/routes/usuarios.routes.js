import { Router } from "express"
import { getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios, getUsuario, updateUsuario } from "../controllers/usuarios.controller.js"


const router = Router()

router.get('/usuario',getUsuarios)
router.get('/usuario/:id',getUsuario)
router.post('/usuario',createUsuarios)
router.put('/usuario/:id',updateUsuarios)
router.patch('/usuario/:id',updateUsuario)
router.delete('/usuario/:id',deleteUsuarios)

export default router