import { Observable } from 'rxjs';
import { Streamresult } from '../../models/result.model';
import { Component, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';
import { StreamresultService } from '../../services/stream.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchUserservice: StreamresultService, private el: ElementRef) { }

  @Output()
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  results: EventEmitter<Streamresult[]> = new EventEmitter<Streamresult[]>();

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.searchUserservice.search(query))
      .switch()
      .subscribe(
      (results: Streamresult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
        console.log(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
      );
  }

}
