import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html'
})
export class Cadastro {

  cliente: Cliente = new Cliente();

  cadastrar(){

    localStorage.setItem(
      "cliente",
      JSON.stringify(this.cliente)
    );

    alert("Cliente cadastrado com sucesso");

  }

}
