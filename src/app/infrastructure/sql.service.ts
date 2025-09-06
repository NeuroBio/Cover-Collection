import { Injectable } from '@angular/core';
import { MockCover } from './mocks';

interface InvokeParams {
	event: string;
	query: string;
	params?: string[];
}
interface SQLInterface {
	invoke: (params: InvokeParams) => Promise<any[]>;
}

declare global {
	interface Window {
		api: SQLInterface;
	}
}

const MockApi: SQLInterface = {
	invoke: async (params: InvokeParams) => {
		let result: any[] = [];
		switch (true) {
			case /FROM Covers/.test(params.query):
				result = [1,2,3].map((id) => ({ ...MockCover, id }))
				break;
				
		}
		return Promise.resolve(result);
	},
}

@Injectable({
  providedIn: 'root'
})
export class SqlService {
  api: SQLInterface;

  constructor() {
    this.api = window?.api || MockApi; 
  }

  async invoke (params: InvokeParams): Promise<any> {
    return this.api.invoke(params);
  }
}
