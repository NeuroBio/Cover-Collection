	import { Component, OnInit } from '@angular/core';
import { Cover } from 'src/app/infrastructure/Repos/cover';
import { SqlService } from 'src/app/infrastructure/sql.service';

@Component({
	selector: 'app-all-covers',
	templateUrl: './all-covers.component.html',
	styleUrl: './all-covers.component.scss'
})
	export class AllCoversComponent implements OnInit{
	covers: Cover[] = [];

	constructor (private sqlService: SqlService) {}

	ngOnInit(): void {
		this.getCovers();
	}

	private async getCovers() {
		try {
			const covers = await this.sqlService.invoke('db-query', 'SELECT * FROM Covers');
			console.log('Covers:', covers);
			this.covers = covers;
		} catch (error) {
			console.error('Error fetching covers:', error);
		}
	}
}
