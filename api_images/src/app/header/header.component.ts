import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IApiRequest, IResults} from '../client_Api/Api.interfaces';
import {ClientApi} from '../client_Api/Client.Api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../app.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onAddValue: EventEmitter<IResults[]> = new EventEmitter<IResults[]>();
  inputValue = '';
  private clientApi: ClientApi;

  // @ts-ignore
  async constructor() {
    this.clientApi = new ClientApi();
    this.getContent('car').then((data: (IResults[] | null)) => {
      if (data) this.onAddValue.emit(data)
    })
  }

  async getContent(word: string): Promise<IResults[] | null> {
    const response: IApiRequest | null = await this.clientApi.apiRequest(word);

    if (!response || !response.results) return null;

    return response.results;
  }

  ngOnInit(): void {
  }

  onClick() {
    if (this.inputValue.trim()) {
      this.getContent(this.inputValue).then((data: (IResults[] | null)) => {
        if (data) this.onAddValue.emit(data)
      })

      this.inputValue = '';
    }
  }
}
