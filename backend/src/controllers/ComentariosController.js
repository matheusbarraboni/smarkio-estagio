database = require('../database/db')
Comentario = require('../entities/Comentario')

class ComentariosController{

  async getAllComentarios() {
    try{
      await database.sync()
      const resultado = await Comentario.findAll()
      return resultado
    } catch(err) {
      console.log(err)
    }
  }

  async createComentario(texto) {
    try{
      await database.sync()
      const resultado = await Comentario.create({texto})
      return resultado
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = ComentariosController
