import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  searchWeather(cityName: string) {
    this.search.emit(cityName);
  }

  constructor() { }

  ngOnInit() { }

}
