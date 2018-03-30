import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [ 
	{ path: 'about/:id', component: AboutComponent }, 
	{ path: 'home', component: HomeComponent } 
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent
	],

	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes)
	],

	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
