import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {
  
  contato: Array<any>;
  contatos: any;

  constructor(private contatoservice:ContatosService) { }

  ngOnInit(): void {
    this.listar();
    this.contatos = {};
  }
  listar(){
    this.contatoservice.listar().subscribe(dados => this.contato = dados);
  }

  frm: FormGroup
  criar(frm: { reset: () => void; }){
      this.contatoservice.criar(this.contatos).subscribe(resposta => {
      this.contato.push(resposta);
      frm.reset(); 
    });
  }
}
