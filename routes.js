const express = require('express');
const routes = express.Router();

const PersonagemController = require("../controllers/PersonagemController");
const PersonagemMiddleware = require("../middleware/PersonagemMiddleware");

routes.get("/personagens", PersonagemController.getAll);
routes.get("/personagem/:id", PersonagemMiddleware.validaID, PersonagemController.getById);
routes.post("/personagens", PersonagemController.create);
routes.put("/personagens/id", PersonagemMiddleware.validaID, PersonagemController.update);
routes.delete("/personagens/:id", PersonagemMiddleware.validaID, PersonagemController.del);

module.exports = routes