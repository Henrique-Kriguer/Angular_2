import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import{ MatIconModule } from'@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, MatIconModule, MatToolbarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crud-angular-material';
}
