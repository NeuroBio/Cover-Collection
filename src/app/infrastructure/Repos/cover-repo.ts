import { Injectable } from '@angular/core';
import { SqlService } from '../sql.service';
import { Cover } from '../../types-and-enums/cover';

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
    const covers = await this.sqlService.invoke({
      event: 'db-query', 
      query: `SELECT * FROM ${Table}`,
    }).catch((err) => {
      console.log(`CoverRepo.all failed: ${err.message}`);
      return [];
    });
    return covers as Cover[];
  }

  async upsert () {}

}
