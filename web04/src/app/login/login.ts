import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  email: string = "";

  entrar(){

    const dados = localStorage.getItem("cliente");

    if(dados == null){
      alert("Nenhum cliente cadastrado");
      return;
    }

    const cliente: Cliente = JSON.parse(dados);

    if(cliente.email == this.email){
      alert("Login realizado com sucesso");
    }else{
      alert("Email não encontrado");
    }

  }

}