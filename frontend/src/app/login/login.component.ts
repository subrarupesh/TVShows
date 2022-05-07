import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private localStorageService: LocalStorageService,
        private toastrService: ToastrService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        // get return url from route parameters or default to '/'
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                user => {
                    this.toastrService.success(user.message, 'Success');
                    this.localStorageService.setItem('currentUser', user.data.token);
                    this.localStorageService.setItem('currentEmail', user.data.email);
                    this.localStorageService.setItem('userId', user.data.user_id);
                    this.router.navigate(['/']);
                },
                error => {
                    this.toastrService.error(error, 'Error');
                    this.loading = false;
                });
    }

}
