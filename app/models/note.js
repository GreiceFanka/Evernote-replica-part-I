const mongoose = require('mongoose');

//Criando estrutura do objeto no DB//
let noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    //Criando associação entre usuários e suas respectivas notas através do ID//
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
  });

  module.exports = mongoose.model('Note', noteSchema);