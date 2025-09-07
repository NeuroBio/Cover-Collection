import { Component } from '@angular/core';
import { EndpointsService } from 'src/app/application-services/endpoints.service';
import { SpecificationsComponent } from './specifications/specifications.component';
import { NotBrokenComponent } from './not-broken/not-broken.component';

interface Entry {
	name: string;
	isSelected: boolean;
	component: any;
}
@Component({
	selector: 'app-help-and-about',
	templateUrl: './help-and-about.component.html',
	styleUrl: './help-and-about.component.scss'
})
export class HelpAndAboutComponent {

	entries: Entry[] = [
		{
			name: 'Specifications',
			isSelected: true,
			component: SpecificationsComponent,
		},
		{
			name: 'Is it really "Broken"?',
			isSelected: false,
			component: NotBrokenComponent,
		}
	];

	constructor (private endpoints: EndpointsService) {}

	openDevTools (): void {
		this.endpoints.openDevTools();
	}

	select (index: number) {
		this.entries.forEach((entry, i) => 
			entry.isSelected = index === i);
	}

	isSelected (index: number): boolean {
		return this.entries[index].isSelected;
	}
}
