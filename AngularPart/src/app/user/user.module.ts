import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
@NgModule({
  declarations: [
    SignUpComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  exports:[SignUpComponent],
  providers: []
})

export class userModule { }
