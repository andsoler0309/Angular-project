import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumListComponent } from './museum/museum-list/museum-list.component';

const routes: Routes = [
  {path: 'museums', component: MuseumListComponent},
  {path: '', redirectTo: 'museums', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
