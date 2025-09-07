import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface CoverForm {
	name: string;
	year: number;
	origin: string;
	destination: string;
}

@Injectable({
	providedIn: 'root'
})
export class CoverFormService {
	form: FormGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			name: ['', Validators.required],
			year: undefined,
			origin: '',
			destination: '',
		});
	}

	resetForm (): void {
		this.form.patchValue({
			name: '',
			year: undefined,
			origin: '',
			destination: '',
		});
		this.form.markAsUntouched();
	}
}
