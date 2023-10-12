import { Component, Input, OnInit } from '@angular/core';
import { IResults } from '../client_Api/Api.interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../app.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() imageArray: IResults[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
