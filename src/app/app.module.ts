import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemShellComponent } from './components/item-shell/item-shell.component';
import { UserCardsComponent } from './components/item-shell/user-cards/user-cards.component';
import { MatrixComponent } from './components/item-shell/matrix/matrix.component';
import { StatusColorDirective } from './directives/status-color.directive';
import { AgeCounterPipe } from './pipes/age-counter.pipe';
import { NameDisplayPipe } from './pipes/name-display.pipe';
import { CubeHoveDirective } from './directives/cube-hove.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemShellComponent,
    UserCardsComponent,
    MatrixComponent,
    StatusColorDirective,
    AgeCounterPipe,
    NameDisplayPipe,
    CubeHoveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
