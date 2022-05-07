import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../services/local-storage.service';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  form!: FormGroup;
  course!: any;
  languages: any;
  submitted = false;
  courseLanguage!: string;
  courseLanguageId!: Number;
  loading: boolean = false; 
  topics!: any;
  constructor(
    private showService: ShowService,
    private router: Router,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
     this.form = this.formBuilder.group({

      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      cast: [[null], [Validators.required]],
      crew: [[null], [Validators.required]],
      user_id: [[null], [Validators.required]]
    });

  }
  get f(){

    return this.form.controls;

  }
  getCourseLanguage(event: any) {
    this.courseLanguageId = event.course_language_id;
  }
  submit(){
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    let cast = this.form.value.cast.split(",");
    let crew = this.form.value.crew.split(",");
    this.form.controls.cast.setValue(cast);
    this.form.controls.crew.setValue(crew);
    this.form.controls.user_id.setValue(this.localStorageService.getItem('userId') || " ");
    this.showService.addShow(this.form.value).subscribe(res => {

      this.toastrService.show('Show Submitted!', 'Success');

      this.router.navigate(['/my-shows']);

 }, err => {
        console.log(err);
       this.toastrService.error('Unable to Submit Show. Please, try again later.', 'Error');

       this.loading = false;
    });
  }

}
