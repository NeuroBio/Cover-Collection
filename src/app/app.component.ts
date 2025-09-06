import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron';

declare global {
    interface Window {
        require: NodeRequire;
    }
}

const ipcRenderer: IpcRenderer = window.require('electron').ipcRenderer;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cover-Collection';
  users: any[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  private async getUsers() {
        try {
            const users = await ipcRenderer.invoke('db-query', 'SELECT * FROM Users');
            console.log('Users:', users);
            this.users = users;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
}
