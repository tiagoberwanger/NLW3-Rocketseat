const Database = require('./db');

Database.then(async db => {
    //inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat, 
            lng, 
            name,
            about,
            whatsapp, 
            images, 
            instructions, 
            opening_hours, 
            open_on_weekends
        ) VALUES (
            "-27.574825",
            "-48.535111",
            "Associação Lar Recando do Carinho",
            "Abrigamos crianças e adolescentes de diversas idades, portadoras do vírus HIV ou doentes de AIDS, em situação de abandono, desestrutura familiar ou risco de morte.",
            "(48) 3228-0024",
            "../public/images/main.jpg",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas das 18h as 8h",
            "1"
        );
    `)

    //consultar dados da tabela 
    const selectedData = await db.all("SELECT * FROM orphanages")
    console.log(selectedData)
})