import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoverComponent } from './pages/add-cover/add-cover.component';
import { AllCoversComponent } from './pages/all-covers/all-covers.component';

const routes: Routes = [
  { path: '', component: AllCoversComponent },
  { path: 'add', component: AddCoverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
