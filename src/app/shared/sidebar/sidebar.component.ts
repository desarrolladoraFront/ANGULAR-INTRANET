import { Component } from '@angular/core';

//Import 
import { AuthService } from 'src/app/auth/services/user-service/authService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
    // Aquí puedes redirigir al usuario a la página de inicio de sesión u otra página deseada.
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
