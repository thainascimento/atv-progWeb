import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-reenviar-senha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reenviar-senha.html'
})
export class ReenviarSenha {

  email: string = "";

  reenviar(){

    const dados = localStorage.getItem("cliente");

    if(dados == null){
      alert("Nenhum cliente cadastrado");
      return;
    }

    const cliente: Cliente = JSON.parse(dados);

    if(cliente.email == this.email){
      alert("Senha enviada para o email cadastrado");
    }else{
      alert("Email não encontrado");
    }

  }

}