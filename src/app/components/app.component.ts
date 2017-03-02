import { MdSidenav } from '@angular/material';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Component } from '@angular/core';
import { Streamresult } from '../models/result.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  results: Streamresult[];

  updateResults(results: Streamresult[]): void {
    this.results = results;
    
  }

  @ViewChild('sidenav') sidenav: MdSidenav;
  selectedResult = {};

  showDetails(result) {
    this.selectedResult = result;
    this.sidenav.open();
  }

  gotoStream(meow) {
    window.location.href = meow;
  }


}
