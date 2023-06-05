import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string | null = null;
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(email: string, password: string) {
    const requestBody = {
      email: email,
      password: password
    };
    fetch('http://lista-de-precios.cafeetrusca.com/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          // La solicitud fue exitosa
          return response.json(); // Convertir la respuesta a JSON
        } else {
          // La solicitud falló
          console.log('Error en el registro');
          throw new Error('Error en el registro');
        }
      })
      .then(data => {
        // Guardar el token en una variable
        this.authToken = data.token;
        console.log('Token:', this.authToken);

        //Realizar la redirección a la ruta deseada
        this.router.navigate(['/dashboard']); // Reemplaza '/dashboard' con la ruta a la que quieres redirigir

        //Actualizar el estado de autenticación
        this.isAuthenticated = true;
      })
      .catch(error => {
        console.error('Error en la solicitud', error);
      });
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.authToken = null;
    this.isAuthenticated = false;
    // Realiza cualquier otra limpieza necesaria, como eliminar datos del usuario en el almacenamiento local, etc.
  }

  private tokenExpired(): boolean {
    // Lógica para verificar si el token ha expirado
    // ...
    return false; // Retorna true si el token ha expirado, false en caso contrario
  }
}
