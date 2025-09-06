import { Component, OnInit } from '@angular/core';
import { Cover } from 'src/app/infrastructure/Repos/cover';
import { CoverRepo } from 'src/app/infrastructure/Repos/cover-repo';

@Component({
	selector: 'app-all-covers',
	templateUrl: './all-covers.component.html',
	styleUrl: './all-covers.component.scss'
})
	export class AllCoversComponent implements OnInit{
	covers: Cover[] = [];

	constructor (private coverRepo: CoverRepo) {}

	async ngOnInit(): Promise<void> {
		this.covers = await this.coverRepo.all();
	}
}
