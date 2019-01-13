import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecasting',
  templateUrl: './titlecasting.component.html',
  styleUrls: ['./titlecasting.component.css']
})
export class TitlecastingComponent implements OnInit {
    title: string;
  constructor() { }

  ngOnInit() {
  }

  onKeyDown(inputStr) {
      console.log('working');
      this.title = inputStr;
  }

}
