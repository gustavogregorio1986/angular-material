import { Component } from '@angular/core';
import { MenuComponent } from './pages/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-estudo-angular';
}
