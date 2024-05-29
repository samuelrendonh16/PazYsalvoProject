import { Component, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {}
  modallogin(): void{
    let  dialogref = this.dialog.open(LoginComponent,{
      height: '400px',
      width: '600px',
    });
  }
}
