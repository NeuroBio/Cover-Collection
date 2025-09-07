import { Injectable } from '@angular/core';
import { SqlService } from '../sql.service';
import { Cover } from '../../types-and-enums/cover';
import { CoverForm } from 'src/app/pages/add-cover/cover-form.service';
import { DatabaseEvent } from 'src/app/types-and-enums';

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
  	constructor(private sqlService: SqlService) {}

	async search () {}

	async all (): Promise<Cover[]> {
		return this.sqlService.invoke({
			event: DatabaseEvent.QUERY, 
			query: `SELECT * FROM ${Table}`,
		}).catch((err) => this.handleThrow('CoverRepo.all', err));
	}

	async upsert (newCover: CoverForm) {
		return this.sqlService.invoke({
		event: DatabaseEvent.INSERT, 
		query: `
			INSERT INTO ${Table}
			(
			name,
			year,
			origin,
			destination
			)
			VALUES (
			${newCover.name},
			${newCover.year},
			${newCover.origin},
			${newCover.destination}
			);`,
		}).catch((err) => this.handleThrow('CoverRepo.upsert', err));
	}

	private handleThrow (method: string, err: any) {
		console.log(`${method} failed: ${err.message}`);
		throw err;
	}

}
