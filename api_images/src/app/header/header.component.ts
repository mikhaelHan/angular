import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../app.component.scss'],
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string | undefined>;
}
