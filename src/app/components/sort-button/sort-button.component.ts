import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortState } from 'src/app/types-and-enums';

@Component({
	selector: 'app-sort-button',
	templateUrl: './sort-button.component.html',
	styleUrl: './sort-button.component.scss'
})
export class SortButtonComponent {
	@Input() fieldName: string = '';
	@Output() resort: EventEmitter<SortState> = new EventEmitter();
	state: SortState = SortState.UNSORTED;

	getSortIcon (): string {
		switch (this.state) {
			case SortState.ASCENDING:
				return 'fa-solid fa-sort-up sorted';
			case SortState.UNSORTED:
				return 'fa-solid fa-sort unsorted';
			case SortState.DESCENDING:
				return 'fa-solid fa-sort-down sorted';
		}
	}

	swapState (): void {
		switch (this.state) {
			case SortState.ASCENDING:
				this.state = SortState.DESCENDING;
				break;
			case SortState.UNSORTED:
				this.state = SortState.ASCENDING;
				break;
			case SortState.DESCENDING:
				this.state = SortState.UNSORTED;
				break;
		}

		this.resort.emit(this.state);
	}

	clear (): void {
		this.state = SortState.UNSORTED;
	}



}
