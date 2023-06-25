import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaymentportalComponent } from './paymentportal/paymentportal.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UpdateComponent,
    UserComponent,
    PaymentportalComponent,
    ConfirmComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
