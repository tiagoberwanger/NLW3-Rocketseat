const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        id: 1, 
        lat: "-27.574825",
        lng: "-48.535111",
        name: "Associação Lar Recando do Carinho",
        about: "Abrigamos crianças e adolescentes de diversas idades, portadoras do vírus HIV ou doentes de AIDS, em situação de abandono, desestrutura familiar ou risco de morte.",
        whatsapp: "04832280024",
        images: [
            "https://source.unsplash.com/random",
            "https://source.unsplash.com/random"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h as 8h",
        open_on_weekends: "1",
    })
    
    //consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")

    //consultar somente 1 orfanato, pelo id
    const selectOneOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')

    // deletar dado da tabela
    const deleteData = await db.run("DELETE FROM orphanages WHERE id = '4'")
})