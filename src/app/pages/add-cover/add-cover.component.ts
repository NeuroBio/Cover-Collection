import { Component, OnInit } from '@angular/core';
import { CoverFormService } from './cover-form.service';
import { FormGroup } from '@angular/forms';
import { EndpointsService } from 'src/app/application-services/endpoints.service';

@Component({
  selector: 'app-add-cover',
  templateUrl: './add-cover.component.html',
  styleUrl: './add-cover.component.scss'
})
export class AddCoverComponent implements OnInit {
	form: FormGroup;
	processing = false;

	constructor (
		private coverForm: CoverFormService,
		private endpoint: EndpointsService
	) {
		this.coverForm.resetForm();
		this.form = this.coverForm.form;
	}

	ngOnInit(): void {

	}

	async save (): Promise<void> {
		this.processing = true;
		const form = this.form.value;
		this.endpoint.saveNewCover(form)
			.then(() => this.coverForm.resetForm())
			.finally(() => this.processing = false);
	}

}
