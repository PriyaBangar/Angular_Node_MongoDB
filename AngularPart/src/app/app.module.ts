import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routs';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { userModule } from './user/user.module';
import { SignUpComponent } from './user/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    userModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
