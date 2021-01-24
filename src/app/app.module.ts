import { HttpInterceptorService } from './shared/service/http-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './common/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RedirectComponent } from './redirect/redirect.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RedirectComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AccordionModule,
    ModalModule.forRoot()
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
