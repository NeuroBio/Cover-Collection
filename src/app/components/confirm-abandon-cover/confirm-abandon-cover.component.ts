import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-confirm-abandon-cover',
	templateUrl: './confirm-abandon-cover.component.html',
	styleUrl: './confirm-abandon-cover.component.scss'
})
export class ConfirmAbandonCoverComponent {

	constructor(
    	public dialogRef: MatDialogRef<ConfirmAbandonCoverComponent>,
  	) {}

	click (response: boolean) {
		this.dialogRef.close(response);
	}
}
