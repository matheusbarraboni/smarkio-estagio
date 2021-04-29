import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-inserir-comentario',
  templateUrl: './inserir-comentario.component.html',
  styleUrls: ['./inserir-comentario.component.css']
})
export class InserirComentarioComponent implements OnInit {

  constructor(public comentarioService: ComentarioService) { }

  ngOnInit(): void {
  }

  onSalvarComentario(form: NgForm) {
    if(form.invalid) {
      return
    }
    this.comentarioService.adicionarComentario(
      form.value.texto
    )
    form.resetForm()
  }

}
