import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponseCodesComponent } from './features/response-codes/response-codes.component';

@Component({
  selector: 'app-root',
  imports: [ResponseCodesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rest-api-response-code-helper');
}
