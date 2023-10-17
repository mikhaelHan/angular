import { Component, Input, OnInit } from '@angular/core';
import { IResults } from '../client_Api/Api.interfaces';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../main/main.component.scss', '../app.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() img: IResults | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
