import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app/app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AccountListComponent} from './account-list/account-list.component';

import {enableProdMode} from '@angular/core';
import { TestComponent } from './app/test/test.component';
import { UserComponent } from './app/user/user.component';
import { UserListComponent } from './app/user-list/user-list.component';
import { UserInsertComponent } from './app/user-insert/user-insert.component';
import { FunctionTestComponent } from './app/function-test/function-test.component';
import { ArrowFunctionComponent } from './app/arrow-function/arrow-function.component';
import { PromiseTestComponent } from './app/promise-test/promise-test.component';
enableProdMode();

const routing = RouterModule.forRoot([
    { path: '',      component: WelcomeComponent },
    { path: 'account-list', component: AccountListComponent },
    { path: 'test', component: TestComponent},
	{ path: 'userlist', component: UserComponent},
	{ path: 'functiontest', component: FunctionTestComponent},
	{ path: 'arrowfunction', component: ArrowFunctionComponent},
	{ path: 'promise', component: PromiseTestComponent}
]);

@NgModule({
    imports: [BrowserModule,
    		  routing,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent,
    			   WelcomeComponent,
    			   AccountListComponent,
    			   TestComponent,
    			   UserComponent,
    			   UserListComponent,
    			   UserInsertComponent,
    			   FunctionTestComponent,
    			   ArrowFunctionComponent,
    			   PromiseTestComponent
             ],
    //providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}