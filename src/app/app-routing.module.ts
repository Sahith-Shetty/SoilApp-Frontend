import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoildetailsComponent } from './soildetails/soildetails.component';
import { SoilsearchComponent } from './soilsearch/soilsearch.component';


const routes: Routes = [
  {path: 'Details', component: SoildetailsComponent},
  {path: 'Search', component: SoilsearchComponent},
  {path: '', redirectTo: '/Details', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
