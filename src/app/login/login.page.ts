import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {


  usuario:string = "";
  pass:string = "";
  errorMessage: string = '';

  
  constructor(private authService: AuthService, private nav: NavController) { 

  }

    // Maneja el envío del formulario de login
    async onLogin() {
      this.errorMessage = ''; // Limpia errores previos
      try {
        // Llama al servicio de login
        const response = await this.authService
          .login(this.usuario, this.pass)
          .toPromise();
  
        // Guarda el token y redirige

        if(response && response.token){
          await this.authService.setToken(response.token);
          this.nav.navigateRoot('/home'); // Redirige al home
        }
      } catch (error) {
        this.errorMessage = 'Credenciales inválidas. Inténtalo nuevamente.';

        await this.authService.setToken("response.token");
          this.nav.navigateRoot('/home'); // Redirige al home
      }
    }

}
