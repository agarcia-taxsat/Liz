import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import {ComponentsModule} from '../../components/components.module';
import {CardComponent} from '../../components/card/card.component';

@NgModule({
    entryComponents: [
        CardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrincipalPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}
