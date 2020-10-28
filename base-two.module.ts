import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTwoRoutingModule } from './base-two-routing.module';
import { NavTwoComponent } from './nav-two/nav-two.component';
import { MainTwoComponent } from './main-two/main-two.component';

import {NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [NavTwoComponent, MainTwoComponent],
  imports: [
    CommonModule,
    BaseTwoRoutingModule,
    NbIconModule,               // <---------
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'default'}),
    NbEvaIconsModule,
    NbLayoutModule,
    NbIconModule,               // <---------
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    
    
  ]
})
export class BaseTwoModule { }
