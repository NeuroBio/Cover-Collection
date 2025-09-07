import { Injectable } from '@angular/core';
import { CoverRepo } from '../infrastructure/Repos/cover-repo';
import { CoverForm } from '../pages/add-cover/cover-form.service';
import { Cover } from '../types-and-enums';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../infrastructure/api.service';

enum SnackBarClass {
	ERROR = 'snackbar-error',
	SUCCESS = 'snackbar-message',
}
@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

	constructor (
		private snackBar: MatSnackBar,
		private coverRepo: CoverRepo,
		private api: ApiService
	) { }

	async allCovers (): Promise<Cover[]> {
		return await this.coverRepo.all()
			.catch((ignore) => {
				this.snackBar.open(
					`Failed to load covers.`,
					'Okay',
					{ panelClass: [SnackBarClass.ERROR] }
				);
				return [];
			});
	}

	async saveNewCover (newCover: CoverForm): Promise<void> {
		return await this.coverRepo.upsert(newCover)
			.then(() => {
				this.snackBar.open(
					`Cover saved!`,
					'Okay',
					{
						panelClass: [SnackBarClass.SUCCESS],
						duration: 3000,
					},
				);
			}).catch((ignore) => {
				this.snackBar.open(
					`Failed to save cover.`,
					'Okay',
					{ panelClass: [SnackBarClass.ERROR] }
				);
			});
	}

	openDevTools (): void {
		return this.api.openDevTools();
	}

}
