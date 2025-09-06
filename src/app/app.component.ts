import { Component } from '@angular/core';
import { ActivatedRoute, Event as RouterEvent, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface NavLink {
	name: string;
	route: string;
}

const NavLinks: NavLink[] = [
	{
		name: 'All Covers',
		route: '/',
	},
	{
		name: 'Add',
		route: '/add',
	}
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Cover Database';
	selected = '';
	navLinks = NavLinks;

	constructor (router: Router) {
		router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd))
			.subscribe((res: NavigationEnd) => {
				this.selected = res.urlAfterRedirects;
			})
	}

	isSelected (route: string): string {
		return route === this.selected ? 'selected' : '';
	}
}
