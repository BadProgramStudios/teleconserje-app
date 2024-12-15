import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Disponible en toda la aplicación
})
export class AuthService {
  private baseUrl = 'https://api.example.com'; // Cambia por tu URL base
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient, private storage: Storage) {
    this.initStorage();
  }

  // Inicializa el almacenamiento
  private async initStorage() {
    await this.storage.create();
  }

  // Inicia sesión
  login(usuario: string, pass: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, {
      usuario,
      pass,
    });
  }

  // Guarda el token en el almacenamiento
  async setToken(token: string): Promise<void> {
    await this.storage.set(this.tokenKey, token);
  }

  // Obtiene el token almacenado
  async getToken(): Promise<string | null> {
    return await this.storage.get(this.tokenKey);
  }

  // Cierra sesión
  async logout(): Promise<void> {
    await this.storage.remove(this.tokenKey);
  }

  // Verifica si el usuario está autenticado
  async isLoggedIn(): Promise<boolean> {
    const token = await this.getToken();
    return !!token; // Retorna true si hay token
  }
}