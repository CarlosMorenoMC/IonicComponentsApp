import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopOverPageRoutingModule } from './pop-over-routing.module';

import { PopOverPage } from './pop-over.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopOverPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopOverPage]
})
export class PopOverPageModule {}
