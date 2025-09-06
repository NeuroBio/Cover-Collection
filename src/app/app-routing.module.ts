import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoverComponent } from './pages/add-cover/add-cover.component';
import { AllCoversComponent } from './pages/all-covers/all-covers.component';
import { EditCoverComponent } from './pages/edit-cover/edit-cover.component';
import { ViewCoverDetailsComponent } from './pages/view-cover-details/view-cover-details.component';

const routes: Routes = [
  { path: '', component: AllCoversComponent },
  { path: 'add', component: AddCoverComponent },
  { path: 'edit', component: EditCoverComponent },
  { path: 'view', component: ViewCoverDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
