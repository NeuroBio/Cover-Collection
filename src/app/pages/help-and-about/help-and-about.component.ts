import { Component } from '@angular/core';
import { EndpointsService } from 'src/app/application-services/endpoints.service';

@Component({
  selector: 'app-help-and-about',
  templateUrl: './help-and-about.component.html',
  styleUrl: './help-and-about.component.scss'
})
export class HelpAndAboutComponent {

  constructor (private endpoints: EndpointsService) {}

  openDevTools (): void {
    this.endpoints.openDevTools();
  }
}
