import { pool } from '../db.js'


export const getPlanes = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM planes")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const getPlan = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM planes WHERE id_plan = ?",[req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message: "No existe un registro con ese id"
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'+error
        })
    }
}
export const createPlanes = async(req, res)=>{ 
    try {
        const {nombre,descripcion,fecha,hora} = req.body
        const [rows] = await pool.query("INSERT INTO planes (nombre,descripcion,fecha,hora) VALUES (?,?,?,?)",[nombre,descripcion,fecha,hora])
        res.send({
            id:rows.insertId,
            nombre, 
            descripcion,
            fecha,
            hora
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updatePlanes = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre,descripcion,fecha,hora} = req.body
        const [result] = await pool.query("UPDATE planes SET nombre =?, descripcion=?, fecha=?, hora=? WHERE id_plan =?",[nombre,descripcion,fecha,hora,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'plan no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM planes WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updatePlan = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre,descripcion,fecha,hora} = req.body
        const [result] = await pool.query("UPDATE planes SET nombre = IFNULL(?,nombre), descripcion=IFNULL(?,descripcion), fecha=IFNULL(?,fecha), hora=IFNULL(?,hora) WHERE id_plan =?",[nombre,descripcion,fecha,hora,id])
        if (result.affectedRows == 0) return res.status(404).json({
            message:'plan no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM planes WHERE id = ?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deletePlanes = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM planes WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"plan no encontrado"
        })
        res.send("plan eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}