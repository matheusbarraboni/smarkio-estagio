import { Injectable } from '@angular/core'
import { Comentario } from './comentario.model'
import { Subject }from 'rxjs'

@Injectable({providedIn: 'root'})
export class ComentarioService {
  private comentarios: Comentario[] = []
  private listaComentariosAtualizada = new Subject<Comentario[]>()

  getComentarios(): Comentario[] {
    return [...this.comentarios]
  }

  adicionarComentario(texto: string) {
    const comentario: Comentario = {texto}
    this.comentarios.push(comentario)
    this.listaComentariosAtualizada.next([...this.comentarios])
  }

  getListaComentariosAtualizadaObservable() {
    return this.listaComentariosAtualizada.asObservable()
  }
}
