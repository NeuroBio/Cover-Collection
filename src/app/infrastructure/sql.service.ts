import { Injectable } from '@angular/core';

interface SQLInterface {
  invoke: Function;
}

declare global {
    interface Window {
        api: SQLInterface;
    }
}

const MockApi: SQLInterface = {
  invoke: () => [],
}

@Injectable({
  providedIn: 'root'
})
export class SqlService {
  api: SQLInterface;

  constructor() {
    this.api = window?.api || MockApi; 
  }

  async invoke (...args: any[]): Promise<any> {
    return this.api.invoke(...args);
  }
}
