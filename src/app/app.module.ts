import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Pages
import { AppComponent } from './app.component';
import { AddCoverComponent } from './pages/add-cover/add-cover.component';
import { AllCoversComponent } from './pages/all-covers/all-covers.component';
import { EditCoverComponent } from './pages/edit-cover/edit-cover.component';
import { HelpAndAboutComponent } from './pages/help-and-about/help-and-about.component';
import { NotBrokenComponent } from './pages/help-and-about/not-broken/not-broken.component';

// Components
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { ConfirmAbandonCoverComponent } from './components/confirm-abandon-cover/confirm-abandon-cover.component';

// Materials
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [
		AppComponent,
		
		// pages
		AllCoversComponent,
		AddCoverComponent,
		EditCoverComponent,
		HelpAndAboutComponent,
		NotBrokenComponent,

		// components
		SortButtonComponent,
		ConfirmAbandonCoverComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
	],
	providers: [
    provideAnimationsAsync()
  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
