import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient,  private router: Router) { }

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
        const token = data.token;
        console.log('Token:', token);

        //Realizar la redirección a la ruta deseada
        this.router.navigate(['/dashboard']); // Reemplaza '/dashboard' con la ruta a la que quieres redirigir

      //Continuar con el flujo del programa
      })
      .catch(error => {
        console.error('Error en la solicitud', error);
      });
  }
  isAuthenticated(): boolean {
    return !!this.token && !this.tokenExpired();
  }

  private tokenExpired(): boolean {
    // Lógica para verificar si el token ha expirado
    // ...
    return false; // Retorna true si el token ha expirado, false en caso contrario
  }

}