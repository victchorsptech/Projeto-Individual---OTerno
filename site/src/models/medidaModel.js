var database = require("../database/config");

function buscarUltimasMedidas(id_user, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as idade
                    from medida
                    where fk_aquario = ${id_user}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(idade) from usuario`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function BuscarAlbum1() {
    const query = `select count(id_user) AS 'qtd_album' from usuario where fk_album = 1;`

    return database.executar(query)
}

function BuscarAlbum2() {
    const query = `select count(id_user)  AS 'qtd_album' from usuario where fk_album = 2;`
    return database.executar(query)
}

function BuscarAlbum3() {
    const query = `select count(id_user) AS 'qtd_album' from usuario where fk_album = 3;`
    return database.executar(query)
}

function BuscarAlbum4() {
    const query = `select count(id_user) AS 'qtd_album' from usuario where fk_album = 4;`
    return database.executar(query)
}

function BuscarIdadeEntre15e25(){
    const query = `
    SELECT COUNT(idade) AS 'qtd_idade' FROM usuario 
    WHERE idade >= 15 && idade < 25;`

    return database.executar(query)
}

function BuscarIdadeEntre25e35(){
    const query = `
    SELECT COUNT(idade) AS 'qtd_idade' FROM usuario 
    WHERE idade >= 25 && idade < 35;`

    return database.executar(query)
}

function BuscarIdadeMaior35(){
    const query = `
    SELECT COUNT(idade) AS 'qtd_idade' FROM usuario 
    WHERE idade >= 35;`

    return database.executar(query)
}

function buscarMedidasEmTempoReal(id_user) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as idade, 
                        fk_aquario 
                        from medida where fk_aquario = ${id_user} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        /* quantos usuario tem a idade maior que 15 e menor que 25 */
        instrucaoSql = `select count(idade) as idade from usuario where idade > 15 && idade < 25;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    BuscarIdadeEntre15e25,
    buscarUltimasMedidas,
    BuscarIdadeEntre25e35,
    BuscarIdadeMaior35,
    buscarMedidasEmTempoReal,

    BuscarAlbum1,
    BuscarAlbum2,
    BuscarAlbum3,
    BuscarAlbum4,


}
