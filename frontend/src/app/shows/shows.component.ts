import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { RecommendationService } from '../services/recommendation.service';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  shows: any;
  selectedShow!: boolean;
  showsTmp: any;

  constructor(
    private fb: FormBuilder,
    private showService: ShowService,
    private recommendationService: RecommendationService,
    private localStorageService: LocalStorageService,
    private router: Router) {}

  ngOnInit() {

    this.recommendationService.getShowRecommendation(this.localStorageService.getItem('userId') || "")
    .subscribe(
      (data: any) => {
        console.log(data);
        this.shows = data.message;
        this.showsTmp = this.shows;
      }, (err: any) => {
        
      });
  }
  selectShow(show: any) {
    if(show === undefined) {
      this.selectedShow = false;
      this.shows = this.showsTmp;
    } else {
      this.shows = this.shows.filter((showData: any) => { return showData._id.toString() === show._id.toString()});
      this.selectedShow = true;
    }
  }
  addShow() {
    this.router.navigate(['add-show']);
  }
  resetRecommendation() {
    this.recommendationService.resetRecommendation(this.localStorageService.getItem('userId') || "")
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);  
      }, err => {
        
      });
  }
  saveRecommendation(show: any) {
    this.recommendationService.saveRecommendation(show._id)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);  
      }, err => {
        
      });
  }
  deleteShow(show: any) {
    this.showService.deleteShow(show._id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['delete-show/', show._id]);  
      }, err => {
        
      });
    
  }
}
