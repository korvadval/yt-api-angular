import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { VideoPanelComponent } from './components/video-panel/video-panel.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LoginPassComponent } from './components/login-pass/login-pass.component';

const appRoutes: Routes =[
  {path:'',component:SearcherComponent},
  {path:'favorites', component:FavoritesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    VideoPanelComponent,
    FavoritesComponent,
    LoginPassComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
