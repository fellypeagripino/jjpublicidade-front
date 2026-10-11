import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {
  private clienteService = inject(ClienteService);
  clientes = signal<Cliente[]>([]);
  novoCliente: Cliente = { nome: '', telefone: '', endereco: '' };

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe(dados => this.clientes.set(dados));
  }

  editar(c: Cliente) {
    this.novoCliente = { ...c };
  }

  salvar() {
    if (this.novoCliente.id) {
      this.clienteService
        .atualizar(this.novoCliente.id, this.novoCliente)
        .subscribe(() => this.depoisDeSalvar());
    } else {
      this.clienteService
        .criar(this.novoCliente)
        .subscribe(() => this.depoisDeSalvar());
    }
  }

  excluir(id: number) {
  this.clienteService.deletar(id).subscribe({
    next: () => this.listar(),
    error: () => alert('Não foi possível excluir. Verifique se o cliente possui anúncios vinculados.'),
  });
}

  private depoisDeSalvar() {
    this.listar();
    this.novoCliente = { nome: '', telefone: '', endereco: '' };
  }
}
