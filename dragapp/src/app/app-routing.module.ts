import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelComponent } from './del/del.component';
import { EditproComponent } from './editpro/editpro/editpro.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'add', component: EditproComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'del', component: DelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
