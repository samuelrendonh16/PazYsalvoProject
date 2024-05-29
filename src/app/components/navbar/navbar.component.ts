import { Component, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() loginevent: EventEmitter<any> = new EventEmitter<any>();

  openmodallogin(){
    this.loginevent.emit();
  }
}
