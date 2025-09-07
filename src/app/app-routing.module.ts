import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoverComponent } from './pages/add-cover/add-cover.component';
import { AllCoversComponent } from './pages/all-covers/all-covers.component';
import { EditCoverComponent } from './pages/edit-cover/edit-cover.component';
import { ViewCoverDetailsComponent } from './pages/view-cover-details/view-cover-details.component';
import { coverFormTouchedGuard } from './guards/cover-form-touched.guard';
import { HelpAndAboutComponent } from './pages/help-and-about/help-and-about.component';

const routes: Routes = [
  { path: '', component: AllCoversComponent },
  {
    path: 'add',
    component: AddCoverComponent,
    canDeactivate: [coverFormTouchedGuard],
  },
  { path: 'edit', component: EditCoverComponent },
  { path: 'view', component: ViewCoverDetailsComponent },
  { path: 'help', component: HelpAndAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
