import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
// This too does not work. Might delete
import { QuoteFormComponent } from '../quote-form/quote-form.component';  
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
