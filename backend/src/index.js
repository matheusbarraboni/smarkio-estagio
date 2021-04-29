const express = require('express')
const ComentariosController = require('./controllers/ComentariosController')
const comentariosController = new ComentariosController()
const IbmWatsonService = require('./ibm-watson/ibm-watson.service')
const ibmWatsonService = new IbmWatsonService()

const app = express();
app.use(express.json())

app.post('/comentario', async (req, res, next) => {
  comentario = await comentariosController.createComentario(req.body.texto)
  ibmWatsonService.getTextToSpeech(comentario.texto, comentario.id.toString())
  res.status(201).json(comentario)
})

app.get('/comentario/getAll', async (req, res, next) => {
  comentarios = await comentariosController.getAllComentarios()
  console.log(comentarios)
  res.status(200).json(comentarios)
})


app.listen(3000, () => {console.log("Up and running. Porta 3000")})
