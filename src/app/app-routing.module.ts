import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { PaymentportalComponent } from './paymentportal/paymentportal.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'update',component:UpdateComponent},
  {path:'user',component:UserComponent},
  {path:'pay',component:PaymentportalComponent},
  {path:'confirm',component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
