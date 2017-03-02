import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// UI Components import
import { MaterialModule } from '@angular/material';
//Mobile touch interactions 
import 'hammerjs';
//Component imports
import { AppComponent } from './components/app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultCardComponent } from './components/result-card/result-card.component'
//Service imports
import { StreamresultService } from './services/stream.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [StreamresultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
