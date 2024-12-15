import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceso con QR', url: '/folder'},
  ];
  constructor(private authService: AuthService, private nav: NavController, private alertController: AlertController, private router: Router,  private menuCtrl: MenuController) {
    this.showSplash();
    this.router.events.subscribe(() => {
      this.checkMenuState();
    });
  }

  async salir(){
    await this.authService.logout().then(()=>{
      this.nav.navigateRoot('/login')
    }); 
  }

  async logOut() {
    this.menuCtrl.close();

    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      subHeader: '¿Estás seguro?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // Cierra el alert sin hacer nada
          cssClass: 'alert-button-dark', 
          handler: () => {
            console.log('El usuario canceló la acción.');
          },
        },
        {
          text: 'Salir',
          cssClass: 'alert-button-dark', 
          handler: () => {
            this.salir();
          },
        },
      ],
    });

    await alert.present();
  }

  checkMenuState() {
    const currentRoute = this.router.url;
    if (currentRoute === '/login') {
      this.menuCtrl.enable(false); // Desactiva el menú en login
    } else {
      this.menuCtrl.enable(true); // Activa el menú en otras rutas
    }
  }

  async showSplash(){
    // Show the splash for an indefinite amount of time:
    await SplashScreen.show({
      autoHide: true,
      showDuration: 3000
});

  }
}
