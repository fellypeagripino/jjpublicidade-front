import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clientes } from './clientes/clientes';
import { Header } from './header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Clientes, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jjpublicidade-front');
}
