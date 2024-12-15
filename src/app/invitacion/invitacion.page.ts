
import { NavController } from '@ionic/angular';
import { Component, inject, OnInit, ViewChild, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
//import html2canvas from 'html2canvas';
//import { Directory, Filesystem, Encoding } from '@capacitor/filesystem';
//import { Share } from '@capacitor/share';
import { LoadingController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.page.html',
  styleUrls: ['./invitacion.page.scss'],
})
export class InvitacionPage  {


  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  segment = "misDatos";
  miQr:string = "0000";

  form: FormGroup;
  horas: number[] = Array.from({ length: 24 }, (_, i) => i + 1); // Genera opciones de 1 a 24 horas
  
  @ViewChild('popover') popover: any | undefined;
  @ViewChild('content') content:any | undefined;

  isOpen = false;

  contador: number = 30; // Inicializamos el contador en 30 segundos
  intervalo: any; // Variable para almacenar el setInterval y detenerlo cuando sea necesario
  today: Date = new Date();  // Asignamos la fecha actual

  formVisita:any[] = [];

  public buffer = 0.06;
  public progress = 0;


  constructor(private nav: NavController, private fb: FormBuilder, private el: ElementRef, private loadingController: LoadingController, private platform: Platform, private renderer: Renderer2) {
    this.form = this.fb.group({
      documento: ['', [Validators.required, validarRut]], // Aplicamos la validación de RUT
      nombreCompleto: ['', Validators.required],
      estacionamiento: [''],
      patente: [''],
      cantidadHoras: [1],
      comentario: [''],
    });

    setInterval(() => {
      this.buffer += 0.06;
      this.progress += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress = 0;
        }, 1000);
      }
    }, 1000);
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
      this.renderer.setStyle(qrCanvas, 'transition', 'transform 0.5s ease-in-out'); // Aplica borde redondeado

    }
  }

  animacion(){
    const qrCanvas = this.el.nativeElement.querySelector('canvas'); // Encuentra el canvas
    this.renderer.setStyle(qrCanvas, 'display', 'inline-block'); // Aplica borde redondeado
    this.renderer.setStyle(qrCanvas, 'transform', 'rotate(90deg)'); // Aplica borde redondeado
    setTimeout(() => {
      this.renderer.setStyle(qrCanvas, 'transform', 'rotate(-90deg)'); // Aplica borde redondeado
    }, 500);

  }

  atras(){
    this.nav.pop();
  }

  jsonValue(item: any) {
    return JSON.stringify(item);  // Convierte el objeto a una cadena JSON
  }
  /*
  captureScreen(){
    const element = document.getElementById('qrImage') as HTMLElement;
   
    html2canvas(element).then((canvas:HTMLCanvasElement) => {
      //this.downloadImage(canvas);
      if(this.platform.is('capacitor')){
        this.compartir(canvas);
      } else { 
        this.downloadImage(canvas);
      }
    })
  }*/

  downloadImage(canvas: HTMLCanvasElement){
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = "qrTeleconserje.png";
    link.click();
  }
/*
  async compartir(canvas: HTMLCanvasElement){

    let base64 = canvas.toDataURL();
    let path = "qrTeleconserje.png";

      const loading = await this.loadingController.create({spinner: 'crescent'});
      await loading.present();


      await Filesystem.writeFile({
        path: path,
        data: base64,
        directory: Directory.Cache,
      }).then(async (res) => {
        let uri = res.uri;

        await Share.share({url: 'ire'});

        await Filesystem.deleteFile({
          path,
          directory: Directory.Cache
        })
      }).finally(()=>{
        loading.dismiss();
      });

  }*/
  

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
 

  onSubmit() {
    if (this.form.valid) {
      const codigo = this.generarCodigoUnico();
      this.form.get('codigoUnico')?.setValue(codigo);

      console.log('Formulario enviado:', this.form.value);
      this.formVisita.push(this.form.value);
      console.log('Formulario guardado:', this.formVisita);
      this.segment = 'qr';
      this.content.scrollToTop();

    } else {
      console.log('Formulario inválido');
    }
  }

  generarCodigoUnico() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  }

// Definición de la función validarRut como función flecha fuera de la clase
const validarRut = (control: AbstractControl): ValidationErrors | null => {
  const rut = control.value;
  if (!rut) return null;

  // Eliminar puntos y guion del RUT
  const rutLimpio = rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
  
  // Validar formato mínimo
  if (rutLimpio.length < 8) return { rutInvalido: true };

  const cuerpo = rutLimpio.slice(0, -1);
  const digitoVerificador = rutLimpio.slice(-1);
  
  // Calcular el dígito verificador
  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += +cuerpo[i] * multiplicador;
    multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
  }

  const dvEsperado = 11 - (suma % 11);
  const dv = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();

  return dv === digitoVerificador ? null : { rutInvalido: true };
};


