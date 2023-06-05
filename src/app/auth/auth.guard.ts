import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/user-service/authService.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (this.authService.isAuthenticatedUser()) {
            // El usuario tiene un token válido, permitir el acceso a la ruta protegida
            return true;
        } else {
            // El usuario no tiene un token válido, redirigir a la página de inicio de sesión
            this.router.navigate(['/login']);
            return false;
        }
    }
}
