import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCoverComponent } from './pages/add-cover/add-cover.component';
import { AllCoversComponent } from './pages/all-covers/all-covers.component';
import { EditCoverComponent } from './pages/edit-cover/edit-cover.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		AllCoversComponent,
		AddCoverComponent,
		EditCoverComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
