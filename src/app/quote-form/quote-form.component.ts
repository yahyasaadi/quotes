import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  public quote = '';
  public quoteAuthor = '';
  public name = '';

  // quotes:Quotes[] = [
  //   new Quotes('Veni, vidi, vici', 'Julius Caesar', 'Yahya Saadi'),
  //   new Quotes('I was born at a very young age', 'Benjamin Button', 'Yahya Saadi'),
  //   new Quotes('We are not here to take part, we are here to take over', 'Conor McGregor', 'Yahya Saadi')
  // ];

  quotes: Quotes[] = [
    {
      quote: 'Veni, vidi, vici',
      quoteAuthor: 'Julius Caesar',
      name: 'Yahya Saadi'
    },
    {
      quote: 'I was born at a very young age',
      quoteAuthor: 'Benjamin Button',
      name: 'Yahya Saadi'
    },
    {
      quote: 'We are not here to take part, we are here to take over',
      quoteAuthor: 'Conor McGregor',
      name: 'Yahya Saadi'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addQuote(){
    let newQuote = {
      quote : this.quote,
      quoteAuthor : this.quoteAuthor,
      name : this.name
    }
    this.quotes.push(newQuote)

    // clear the input fields for another quote
    this.quote = '';
    this.quoteAuthor = '';
    this.name = '';
  }

}
