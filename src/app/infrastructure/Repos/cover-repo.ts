import { Injectable } from '@angular/core';

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
export class SqlService {  
  constructor(private sqlService: SqlService) {

  }

  async search () {}

  async all () {}

  async upsert () {}

}
