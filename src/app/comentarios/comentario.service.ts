import { Injectable } from '@angular/core'
import { Comentario } from './comentario.model'
import { Subject }from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class ComentarioService {
  private comentarios: Comentario[] = []
  private listaComentariosAtualizada = new Subject<Comentario[]>()

  constructor(private httpClient: HttpClient) {}

  getComentarios(): void{
    this.httpClient.get<Comentario[]>('http://localhost:3000/comentario/getAll')
      .subscribe((resposta) => {
        this.comentarios = resposta
        this.listaComentariosAtualizada.next([...this.comentarios])
      })
  }

  adicionarComentario(id: string, texto: string): void{
    const comentario: Comentario = {id, texto}
    this.httpClient.post<{id: Number}>('http://localhost:3000/comentario', {texto: comentario.texto})
      .subscribe((dados) => {
        comentario.id = dados.id.toString()
        this.comentarios.push(comentario)
        this.listaComentariosAtualizada.next([...this.comentarios])
      })
  }

  getListaComentariosAtualizadaObservable() {
    return this.listaComentariosAtualizada.asObservable()
  }
}
