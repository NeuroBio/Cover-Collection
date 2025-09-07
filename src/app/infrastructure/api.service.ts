import { Injectable } from '@angular/core';
import { MockCovers } from './mocks';
import { DatabaseEvent } from 'src/app/types-and-enums';


interface InvokeParams {
	event: string;
	query: string;
	params?: (string|number)[];
}

interface QueryParams {
	query: string;
	params?: (string|number)[];
}

interface ApiInterface {
	databaseRequest: (params: InvokeParams) => Promise<any[]>;
	openDevTools: () => void;
}

declare global {
	interface Window {
		api: ApiInterface;
	}
}

const MockApi: ApiInterface = {
	databaseRequest: async (params: InvokeParams) => {
		let result: any[] = [];
		switch (true) {
			case /FROM Covers/.test(params.query):
				result = MockCovers;
				break;
				
		}
		return Promise.resolve(result);
	},
	openDevTools: () => {
		console.log('You need to build with electron to test this functionality.');
	}
}

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	api: ApiInterface;

	constructor() {
		this.api = window?.api || MockApi; 
	}

	async get (params: QueryParams): Promise<any> {
		return this.api.databaseRequest({ ...params, event: DatabaseEvent.QUERY });
	}

	async post (params: QueryParams): Promise<any> {
		return this.api.databaseRequest({ ...params, event: DatabaseEvent.INSERT });
	}

	openDevTools (): void {
		return this.api.openDevTools();
	}
}
