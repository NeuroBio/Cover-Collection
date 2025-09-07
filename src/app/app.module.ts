import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Pages
import { AppComponent } from './app.component';
import { AddCoverComponent } from './pages/add-cover/add-cover.component';
import { AllCoversComponent } from './pages/all-covers/all-covers.component';
import { EditCoverComponent } from './pages/edit-cover/edit-cover.component';

// Components
import { SortButtonComponent } from './components/sort-button/sort-button.component';

// Materials
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [
		AppComponent,
		
		// pages
		AllCoversComponent,
		AddCoverComponent,
		EditCoverComponent,

		// components
		SortButtonComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
	],
	providers: [
    provideAnimationsAsync()
  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
