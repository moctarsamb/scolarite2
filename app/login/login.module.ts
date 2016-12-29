import { NgModule } from '@angular/core';
import { LoginRouting } from './login-routing.module';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent }   from './login.component';

@NgModule({
    imports: [BrowserModule, FormsModule, LoginRouting],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
