import { pool } from '../db.js'

export const getSitios = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM sitios")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const getSitio = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM sitios WHERE id_sitio = ?",[req.params.id])
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

export const createSitios = async(req, res)=>{ 
    try {
        const {nombre,ubicacion,telefono,horario,servicios} = req.body
        const [rows] = await pool.query("INSERT INTO sitios (nombre,ubicacion,telefono,horario,servicios) VALUES (?,?,?,?,?)",[nombre,ubicacion,telefono,horario,servicios])
        res.send({
            id:rows.insertId,
            nombre, 
            ubicacion,
            telefono,
            horario,
            servicios
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const updateSitios = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre,ubicacion,telefono,horario,servicios} = req.body
        const [result] = await pool.query("UPDATE sitios SET nombre = ?, ubicacion = ?, telefono = ?, horario = ?, servicios = ? WHERE id_sitio = ?",[nombre,ubicacion,telefono,horario,servicios,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Sitio no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM sitios WHERE id_sitio = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const updateSitio = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre,ubicacion,telefono,horario,servicios} = req.body
        const [result] = await pool.query("UPDATE sitios SET nombre = IFNULL(?,nombre), ubicacion=IFNULL(?,ubicacion), telefono=IFNULL(?,telefono), horario=IFNULL(?,horario), servicios=IFNULL(?,servicios) WHERE id_sitio =?",[nombre,ubicacion,telefono,horario,servicios,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Sitio no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM sitios WHERE id_sitio = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteSitios = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM sitios WHERE id_sitio = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"Sitio no encontrado"
        })
        res.send("Sitio eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}