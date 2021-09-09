const req = require("express/lib/request");
const Personagem = require("../model/Personagem")

const getAll = async (req, res) => {
    try {
        const personagens = await Personagem.find()
        return res.send({personagens})
    } catch (err) {
        res.status(500).send({error: err})
    }
};

const getById = async (req, res) => {
    const id = req.params.id

    try {
        const personagem = await Personagem.findById(id)
        if (!personagem) {
            res.status(404).json({message: "personagem não encontrado"})
            return;
        }
    } catch (err) {
        res.status(500).send({error: err})
    }
}

const create = async (req, res) => {
    const { nome, imagemUrl} = req.body;

    if (!nome || imagemUrl) {
        res.status(400).send({
            message:"Você não enviou todos os dados para o cadastro",
        });
        return;
}

const novoPersonagem = await new Personagem({
    nome,
    imagemUrl,
});

try {
    await novoPersonagem.save();
    return res
    .status(201)
    .send({ message: "Personagem criado com sucesso", novoPersonagem});
}catch (err) {
    res.status(500).send({error: err})
    }
};

const update = async (req, res) => {
    const {nome, imagemUrl} = req.body;

    if (!nome || imagemUrl) {
        res.status(400).send({
        message:"Você não enviou todos os dados para o cadastro",
        });
        return;
}
}

res.personagem.nome = nome
res.personagem.imagemUrl = imagemUrl

const del = async (req, res) => {
    try {
        await res.personagem.remove()
        return res.send({message: "personagem removido com sucesso"})
    }catch (err) {
        res.status(500).send({error:err})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
};