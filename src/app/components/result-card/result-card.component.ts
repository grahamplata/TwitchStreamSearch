import { Component, Input, OnInit } from '@angular/core';
import { Streamresult } from '../../models/result.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  
  @Input()
  result: Streamresult;

  constructor() { }

  ngOnInit() {
  }

}
