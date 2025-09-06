	import { Component, OnInit } from '@angular/core';
import { SqlService } from 'src/app/infrastructure/sql.service';

@Component({
	selector: 'app-all-covers',
	templateUrl: './all-covers.component.html',
	styleUrl: './all-covers.component.scss'
})
	export class AllCoversComponent implements OnInit{
	users: any[] = [];

	constructor (private sqlService: SqlService) {}

	ngOnInit(): void {
		this.getUsers();
	}

	private async getUsers() {
		try {
			const users = await this.sqlService.invoke('db-query', 'SELECT * FROM Users');
			console.log('Users:', users);
			this.users = users;
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	}
}
