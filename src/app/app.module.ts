import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MyWorkComponent,
    MySkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
