import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIcon } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            MatToolbarModule,
            RouterLink,
            MatIcon,
            FlexLayoutModule,
            MatCardModule,
            FormsModule,
            MatFormField],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crudCliente';
}
