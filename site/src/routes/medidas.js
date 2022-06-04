const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimas", medidaController.BuscarIdade);
router.get("/ultimas2", medidaController.BuscarAlbum);



module.exports = router;