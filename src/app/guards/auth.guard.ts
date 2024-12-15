// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // Este método se ejecuta cada vez que se intenta acceder a una ruta protegida
  async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.authService.isLoggedIn();
    
    // Si está logueado, redirige al home
    if (isLoggedIn) {
      this.router.navigateByUrl('/home'); // O la ruta que desees
      return false;  // Previene que acceda al login
    }
    return true;  // Si no está logueado, permite el acceso al login
  }
}
