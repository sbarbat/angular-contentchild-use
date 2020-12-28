import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ResourceUpdatesComponent } from './resource-updates/resource-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ResourceUpdatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
