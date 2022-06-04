var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var id_user = req.params.id_user;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(id_user, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function BuscarIdade(req, res) {

    let idade = [];

    medidaModel.BuscarIdadeEntre15e25().then((response) => {
       const tamanho = response.length;
       if(tamanho > 0){
            idade.push(response)
            medidaModel.BuscarIdadeEntre25e35().then((response) => {
                const t1 = response.length;
                if(t1 > 0){
                    idade.push(response);
                    medidaModel.BuscarIdadeMaior35().then((response) => {
                        const t2 = response.length;
                        if(t2 > 0){
                            idade.push(response)
                            res.json({
                                idade
                            })
                        }
                    }).catch(function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    });
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
       }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    BuscarIdade

}