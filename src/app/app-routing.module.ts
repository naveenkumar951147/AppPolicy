import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';


const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: '', redirectTo: 'policy', pathMatch: 'full' },
  { path: '**', redirectTo: 'policy', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
