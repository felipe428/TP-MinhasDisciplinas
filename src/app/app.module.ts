import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './home/home.component';
import { NotasComponent } from './notas/notas.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

import { RouterModule } from '@angular/router';
import { DisciplinasService } from './disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'notas', component: NotasComponent },
      { path: 'disciplinas', component: DisciplinasComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NotasComponent,
    DisciplinasComponent
  ],
  bootstrap: [AppComponent],
  providers: [DisciplinasService]
})
export class AppModule {}
