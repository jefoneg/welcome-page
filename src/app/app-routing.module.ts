import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HeaderComponent, title: "Welcome"},
  {path: 'services', component: ServicesComponent, title: "Services"},
  {path: 'pricing', component: PricingComponent, title: "Pricing"},
  {path: 'contact', component: ContactComponent, title: "Contact-Us"},
  {path: '', component: HeaderComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
