import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/application-services/endpoints.service';
import { Cover } from 'src/app/infrastructure/Repos/cover';

@Component({
	selector: 'app-all-covers',
	templateUrl: './all-covers.component.html',
	styleUrl: './all-covers.component.scss'
})
	export class AllCoversComponent implements OnInit{
	covers: Cover[] = [];

	constructor (private endpoints: EndpointsService) {}

	async ngOnInit(): Promise<void> {
		this.covers = await this.endpoints.allCovers();
	}
}
