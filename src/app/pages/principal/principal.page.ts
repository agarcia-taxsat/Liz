import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {PopoverController} from '@ionic/angular';
import {CardComponent} from '../../components/card/card.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private  popoverController: PopoverController) { }

  ngOnInit() {

  }

  async mostrarPop(event) {
    const popover = await this.popoverController.create({
      component: CardComponent,
      event,
      mode: 'ios',
    });
    popover.mode = 'ios';

    await popover.present();
  }

}
