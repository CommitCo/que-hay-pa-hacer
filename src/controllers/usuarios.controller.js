import { pool } from '../db.js'

export const getUsuarios = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM usuarios")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const getUsuario = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM usuarios WHERE id_usuario = ?",[req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message: "No existe un registro con ese id"
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const createUsuarios = async(req, res)=>{ 
    try {
        const {nombre,apellido,correo,intereses,contraseña} = req.body
        const [rows] = await pool.query("INSERT INTO usuarios (nombre,apellido,correo,intereses,contraseña) VALUES (?,?,?,?,?)",[nombre,apellido,correo,intereses,contraseña])
        res.send({
            id:rows.insertId,
            nombre,
            apellido,
            correo,
            intereses,
            contraseña
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const updateUsuarios = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre,apellido,correo,intereses,contraseña} = req.body
        const [result] = await pool.query("UPDATE usuarios SET nombre = ?, apellido = ?, correo = ?, intereses = ?, contraseña = ? WHERE id_usuario = ?",[nombre,apellido,correo,intereses,contraseña])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Usuario no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuario=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const updateUsuario = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre,apellido,correo,intereses,contraseña} = req.body
        const [result] = await pool.query("UPDATE usuarios SET nombre = IFNULL(?,nombre), apellido = IFNULL(?,apellido), correo = IFNULL(?,correo), intereses = IFNULL(?,intereses), contraseña = IFNULL(?,contraseña) WHERE id_usuario =?",[nombre,apellido,correo,intereses,contraseña,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Usuario no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuario=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteUsuarios = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM usuarios WHERE id_usuario = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"Usuario no encontrado"
        })
        res.send("Usuario eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}