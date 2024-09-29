import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemanderDevisComponent } from './demander/demander-devis.component';
import { HomeComponent } from './home/home.component';
import { InscrireComponent } from './signup/inscrire.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demander', component: DemanderDevisComponent },
  { path: 'signup', component: InscrireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
