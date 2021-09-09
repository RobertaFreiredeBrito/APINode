const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    imagemUrl:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Personagem", personagemSchema)