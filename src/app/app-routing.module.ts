import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndustryComponent} from './industry/industry.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'industry',component:IndustryComponent},
  {path:'services',component:ServicesComponent},
  {path:'team',component:TeamComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
