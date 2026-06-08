import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT id, name, pricePoint AS "pricePoint", audience, image, description, submittedBy AS "submittedBy", submittedOn AS "submittedOn" FROM gifts ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default {
  getGifts
}
