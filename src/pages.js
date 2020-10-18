const Database = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async orphanage(req, res) {
        const id = req.query.id
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            orphanage.open_on_weekends == "0" ? false : true
            return res.render('orphanage', { orphanage })
        } catch (e) {
            console.log(e)
            return res.send('Erro no banco de dados')
        }
    }, 

    async orphanages(req, res) {
        
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
        } catch (e) {
            console.log(e)
            return res.send('Erro no banco de dados')
        }
        
    }, 

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }, 
}