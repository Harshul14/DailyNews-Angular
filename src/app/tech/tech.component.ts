import { Component, OnInit } from '@angular/core';
import { DailynewsapiService } from '../service/dailynewsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  technologyHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.technologyNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.technologyHeadlinesData=result.articles;
    })
  }

}
