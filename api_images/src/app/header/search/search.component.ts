import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('search') searchInput!: ElementRef<HTMLInputElement>;
  @Output() search = new EventEmitter<string>();

  searchClear() {
    this.searchInput.nativeElement.value = '';
    this.search.emit('');
  }

  onSearch($event: Event) {
    const el = $event.target as HTMLInputElement;
    this.search.emit(el.value);
  }
}
