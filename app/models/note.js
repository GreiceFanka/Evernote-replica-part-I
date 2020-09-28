const mongoose = require('mongoose');

//Criando estrutura do objeto no DB//
const noteSchema = new mongoose.Schema({
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
  noteSchema.index({'title': 'text', 'body': 'text'});

  module.exports = mongoose.model('Note', noteSchema);