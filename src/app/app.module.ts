import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule } from "@angular/material/datepicker";
import {MatDialogModule } from "@angular/material/dialog";
import {MatInputModule } from "@angular/material/input";
import {MatListModule } from "@angular/material/list";
import {MatPaginatorModule } from "@angular/material/paginator";
import {MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatSelectModule } from "@angular/material/select";
import {MatSidenavModule } from "@angular/material/sidenav";
import {MatSortModule } from "@angular/material/sort";
import {MatTableModule } from "@angular/material/table";
import {MatToolbarModule } from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { HeaderComponent } from './tasks/header/header.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { FooterComponent } from './tasks/footer/footer.component';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskDetailComponent,
    TaskListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
