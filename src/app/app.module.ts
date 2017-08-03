import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DataService} from './services/data.service';
import {ColumeComponent} from './components/colume/colume.component';
import {SortbyPipe} from './pipes/sortby.pipe';
import {FormsModule} from "@angular/forms";
import {DialogWindowComponent} from './components/dialog-window/dialog-window.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		ColumeComponent,
		SortbyPipe,
		DialogWindowComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule.forRoot()
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
