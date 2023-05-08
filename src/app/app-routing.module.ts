import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import {FormularioComponent} from '../app/components/formulario/formulario.component';
import {ListComponent} from '../app/components/list/list.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
  {path: 'dashboard', component:DashboardComponent },
  {path: 'form', component:FormularioComponent },
  {path: 'list', component:ListComponent },
  { path: 'form/:id', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   constructor( private route: ActivatedRoute,) { }
}
