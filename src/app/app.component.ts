import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes:Quotes[] = [
    new Quotes('Veni, vidi, vici', 'Julius Caesar', 'Yahya Saadi'),
    new Quotes('I was born at a very young age', 'Benjamin Button', 'Yahya Saadi'),
    new Quotes('We are not here to take part, we are here to take over', 'Conor McGregor', 'Yahya Saadi')
  ];
}
