import { pool } from '../db.js'


export const getSitios = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const [rows] = await pool.query("SELECT * FROM employee")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const getSitio = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?",[req.params.id])
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
        throw new Error('Mi error')
        const {name,salary} = req.body
        const [rows] = await pool.query("INSERT INTO employee (name,salary) VALUES (?,?)",[name,salary])
        res.send({
            id:rows.insertId,
            name, 
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateSitios = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE employee SET name =?, salary=? WHERE id =?",[name,salary,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM employee WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateSitio = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?,name), salary=IFNULL(?,salary) WHERE id =?",[name,salary,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM employee WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteSitios = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const [result] = await pool.query("DELETE FROM employee WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"Empleado no encontrado"
        })
        res.send("Empleado eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}