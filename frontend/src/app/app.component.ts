import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVShow';
  @ViewChild('sidenav') sidenav: any;
  @ViewChild(MatMenuTriggerFor) trigger!: MatMenuTrigger;
  constructor(private localStorageService: LocalStorageService,
    private router: Router) {

  }
  isAccount() {
    return this.router.isActive('accounts', false);
  }
  canAccess() {
    return this.localStorageService.getItem('currentUser');
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.localStorageService.removeItem('currentUser');
    this.localStorageService.removeItem('userId');
    this.router.navigate(['/']);
  }

}
function MatMenuTriggerFor(MatMenuTrigger: any) {
  MatMenuTrigger.open();
}