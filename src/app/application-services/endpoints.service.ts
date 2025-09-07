import { Injectable } from '@angular/core';
import { CoverRepo } from '../infrastructure/Repos/cover-repo';
import { Cover } from '../infrastructure/Repos/cover';
import { CoverForm } from '../pages/add-cover/cover-form.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

	constructor (private coverRepo: CoverRepo) { }

	async allCovers (): Promise<Cover[]> {
		return await this.coverRepo.all();
	}

	async saveNewCover (newCover: CoverForm): Promise<void> {
		return new Promise((resolve) => setTimeout(() => resolve(), 500));
	}

}
