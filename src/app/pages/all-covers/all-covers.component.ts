import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EndpointsService } from 'src/app/application-services/endpoints.service';
import { SortButtonComponent } from 'src/app/components/sort-button/sort-button.component';
import { SortState, Cover } from 'src/app/types-and-enums';

@Component({
	selector: 'app-all-covers',
	templateUrl: './all-covers.component.html',
	styleUrl: './all-covers.component.scss'
})
	export class AllCoversComponent implements OnInit{
	@ViewChildren('sort') sorters?: QueryList<SortButtonComponent>;
	covers: Cover[] = [];
	private unsortedCovers: Cover[] = [];

	constructor (private endpoints: EndpointsService) {}

	async ngOnInit(): Promise<void> {
		this.covers = await this.endpoints.allCovers();
		this.unsortedCovers = this.covers;
	}

	resort (): void {
		const sortState: {[key: string]: SortState} = {};
		this.sorters!.forEach((sorter) => {
			if (sorter.state !== SortState.UNSORTED) {
				sortState[sorter.fieldName] = sorter.state
			}
		});

		const sortKeys = Object.keys(sortState) as Array<keyof Cover>;
		if (!sortKeys.length) {
			this.covers = this.unsortedCovers;
			return
		}

		let temp = [...this.covers];
		sortKeys.forEach((key) => {
			temp.sort((a, b) => {
				if (a[key] === b[key]) {
					return 0;
				}
				return sortState[key] === SortState.ASCENDING
					? a[key] < b[key] ? -1 : 1
					: a[key] < b[key] ? 1 : -1
			});
		});
		this.covers = temp;
	}

	unsort (): void {
		this.covers = this.unsortedCovers;
		this.sorters!.forEach((sorter) => sorter.clear());
	}

	search(): void {
		
	}
}
