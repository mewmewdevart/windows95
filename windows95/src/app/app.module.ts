import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WindowComponent } from './window/window.component';
import { IconComponent } from './icon/icon.component';
import { DraggableDirective } from './window/draggable.directive';
import { EventsComponent } from './events/events.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		WindowComponent,
  		IconComponent,
		DraggableDirective,
  EventsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatSidenavModule,
		MatGridListModule,
		MatCardModule,
		DragDropModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
