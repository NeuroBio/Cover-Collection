import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Cover } from '../../types-and-enums/cover';
import { CoverForm } from 'src/app/pages/add-cover/cover-form.service';

const Table = 'Covers';
export enum CoverField {
  NAME = 'name',
  YEAR = 'year',
  ORIGIN = 'origin',
  DESTINATION = 'destination',
}

@Injectable({
  providedIn: 'root'
})
export class CoverRepo {  
  	constructor(private ApiService: ApiService) {}

	async search () {}

	async all (): Promise<Cover[]> {
		const query = `SELECT * FROM ${Table}`;
		return this.ApiService.get({ query })
			.catch((err) => this.handleThrow('CoverRepo.all', err, query));
	}

	async upsert (newCover: CoverForm) {
		const query = `INSERT INTO ${Table}
			(
			name,
			year,
			origin,
			destination
			)
			VALUES (?,?,?,?);`
		return this.ApiService.post({
			query,
			params: [
				newCover.name,
				newCover.year,
				newCover.origin,
				newCover.destination
			]
		}).catch((err) => this.handleThrow('CoverRepo.upsert', err, query));
	}

	private handleThrow (method: string, err: any, query: string) {
		console.log(`${method} failed with error: ${err.message} on query: ${query}`);
		throw err;
	}

}
