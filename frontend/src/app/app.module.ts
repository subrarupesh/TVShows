import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {NgSelectModule} from '@ng-select/ng-select';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShowsComponent } from './shows/shows.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AddShowComponent } from './add-show/add-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ShowsComponent,
    RecommendationsComponent,
    AddShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatMenuModule,
    FormsModule,
    MatRadioModule,
    NgSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
