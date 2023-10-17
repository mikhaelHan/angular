import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './header/search/search.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent, FooterComponent, ImageComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
