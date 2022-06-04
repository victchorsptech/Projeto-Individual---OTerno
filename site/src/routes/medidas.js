const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimas", medidaController.BuscarIdade);



module.exports = router;