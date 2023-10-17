import { Component, Input } from '@angular/core';
import { ClientApi } from '../client_Api/Client.Api';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  search$ = new Subject<string>();
  dataSet = this.search$.pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((searchValue: string) => this.clientApi.apiRequest(searchValue)),
  );

  constructor(public clientApi: ClientApi) {}

  @Input() set search(value: string | Event | undefined) {
    if ((value as Event).target) {
      return;
    }

    this.search$.next(value as string);
  }
}
