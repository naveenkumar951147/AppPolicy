import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { PolicyComponent } from './policy/policy.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    AddComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'policy', component: PolicyComponent },
      { path: '', redirectTo: 'policy', pathMatch: 'full' },
      { path: '**', redirectTo: 'policy', pathMatch: 'full' }
    ]),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
