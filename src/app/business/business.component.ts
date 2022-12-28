import { Component, OnInit } from '@angular/core';
import { DailynewsapiService } from '../service/dailynewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  businessHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.businessNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.businessHeadlinesData=result.articles;
    })
  }

}
