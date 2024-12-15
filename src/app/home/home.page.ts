import { Component, ElementRef, OnInit, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService, private router: Router, private nav: NavController, private el: ElementRef, private renderer: Renderer2) {}
  
  async ngOnInit() {
    const isLoggedIn = await this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.nav.navigateRoot('/login'); // Redirige al login si no está autenticado
    }
  }

  ngAfterViewInit() {
    // Espera a que el QR se haya renderizado
    const qrCanvas = this.el.nativeElement.querySelector('canvas'); // Encuentra el canvas
    if (qrCanvas) {
      this.renderer.setStyle(qrCanvas, 'border-radius', '20px'); // Aplica borde redondeado
      this.renderer.setStyle(qrCanvas, 'overflow', 'hidden'); // Asegura que no se desborde
      this.renderer.setStyle(qrCanvas, '-webkit-box-shadow', '0px 4px 5px 0px rgba(0,0,0,0.75)');
      this.renderer.setStyle(qrCanvas, '-moz-box-shadow', '0px 4px 5px 0px rgba(0,0,0,0.75)');
      this.renderer.setStyle(qrCanvas, 'box-shadow', '0px 7px 20px 0px rgba(0,0,0,0.75)');
    }
  }

  invitacion(){

    this.nav.navigateForward('/invitacion');

  }
}
