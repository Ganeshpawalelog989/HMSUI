
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PhysicianlayoutComponent } from './physicianlayout.component';
import { PhisiciansidebarComponent } from 'src/app/shared/components/phisiciansidebar/phisiciansidebar.component';



@NgModule({
  declarations: [
    PhysicianlayoutComponent,
    PhisiciansidebarComponent
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,

    CommonModule,
    MatGridListModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule, 
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule ,
    MatTableModule ,
    MatSlideToggleModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    
  ]
})

export class PhysicianlayoutModule { }
