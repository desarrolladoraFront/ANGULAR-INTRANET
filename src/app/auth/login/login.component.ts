// Importaciones de Angular y Librerías
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as paper from 'paper';

//Importo el servicio para la petición API
import { AuthService } from '../services/user-service/authService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasElement: ElementRef<HTMLCanvasElement> | undefined;

  constructor(private authService: AuthService) { }

  ngAfterViewInit() {
    const canvasElement: HTMLCanvasElement | null = this.canvasElement?.nativeElement || null;
    const ctx = canvasElement?.getContext('2d');
    
    if (ctx && canvasElement) {
      // Aquí puedes trabajar con el contexto ctx de forma segura
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

      paper.setup(canvasElement);
    }
  }
  
  email!: string;
  password!: string;

  register() {
    console.log('Email', this.email)
    console.log('Password', this.password);

    this.authService.registerUser(this.email, this.password);
  }
}

