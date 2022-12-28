import { Component, OnInit } from '@angular/core';
import { DailynewsapiService } from '../service/dailynewsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  sportsHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.sportsNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.sportsHeadlinesData=result.articles;
    })
  }

}
