import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comentario } from '../comentario.model'
import { ComentarioService} from '../comentario.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.css']
})
export class ListarComentarioComponent implements OnInit, OnDestroy {

  comentarios: Comentario[] = []
  private comentariosSubscription!: Subscription

  constructor(public comentarioService: ComentarioService) {}

  ngOnInit(): void {
    this.comentarioService.getComentarios()
    this.comentariosSubscription = this.comentarioService
      .getListaComentariosAtualizadaObservable()
      .subscribe((comentarios: Comentario[]) => {
        this.comentarios = comentarios
      })
  }

  ngOnDestroy(): void {
    this.comentariosSubscription.unsubscribe()
  }
}
