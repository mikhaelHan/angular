import { IApiRequest } from './Api.interfaces';

export class ClientApi {
  constructor() {}

  async apiRequest(word: string): Promise<IApiRequest | null> {
    try {
      const response: Response = await fetch(
        `https://api.unsplash.com/search/photos?query=${word}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`,
      );

      return await response.json();
    } catch (error) {
      return null;
    }
  }
}
