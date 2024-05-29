import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SideMenuComponent,NavbarComponent,LoginComponent]
})
export class AppComponent {
  title = 'PazYSalvoAppClient';
  constructor(public dialog: MatDialog){}
  openModal(){
    const dialogRef = this.dialog.open(LoginComponent);
  }
}
