import { Component, OnInit } from '@angular/core';
import { DailynewsapiService } from '../service/dailynewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  topHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.dailyNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.topHeadlinesData=result.articles;
    })
  }

}
