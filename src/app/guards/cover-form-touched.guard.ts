import { CanDeactivateFn } from '@angular/router';
import { AddCoverComponent } from '../pages/add-cover/add-cover.component';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAbandonCoverComponent } from '../components/confirm-abandon-cover/confirm-abandon-cover.component';
import { Observable, of } from 'rxjs';

export const coverFormTouchedGuard: CanDeactivateFn<AddCoverComponent> = (component): Observable<boolean> => {
	const dialog = inject(MatDialog);
	if (component.form.touched) {
		const dialogRef = dialog.open(ConfirmAbandonCoverComponent);
		return dialogRef.afterClosed();
	}

	return of(true);
};
