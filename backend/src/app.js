import express from "express"
import usuariosRoutes from "./routes/usuarios.routes.js"
import planesRoutes from "./routes/planes.routes.js"
import sitiosRoutes from "./routes/sitios.routes.js"

const app = express()

app.use(express.json())

app.use("/api",usuariosRoutes)
app.use("/api",planesRoutes)
app.use("/api",sitiosRoutes)

app.use((req, res, next)=>{
    res.status(404).json({
        message:"endpoint no encontrado"
    })
})
export default app