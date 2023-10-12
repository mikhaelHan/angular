import { Component } from '@angular/core';
import { IResults } from './client_Api/Api.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageArray: IResults[] = [];

  updateContent(array: IResults[]) {
    this.imageArray = [...array];
  }
}
