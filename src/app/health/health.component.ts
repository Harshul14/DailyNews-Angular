import { DailynewsapiService } from './../service/dailynewsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  healthHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.healthNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.healthHeadlinesData=result.articles;
    })
  }

}
