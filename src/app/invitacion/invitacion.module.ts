import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitacionPageRoutingModule } from './invitacion-routing.module';

import { InvitacionPage } from './invitacion.page';
import { ReactiveFormsModule } from '@angular/forms';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitacionPageRoutingModule,
    ReactiveFormsModule,
    QrCodeModule
  ],
  declarations: [InvitacionPage]
})
export class InvitacionPageModule {}
