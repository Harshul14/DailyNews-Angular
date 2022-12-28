import { Component, OnInit } from '@angular/core';
import { DailynewsapiService } from '../service/dailynewsapi.service';

@Component({
  selector: 'app-entertaintment',
  templateUrl: './entertaintment.component.html',
  styleUrls: ['./entertaintment.component.css']
})
export class EntertaintmentComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  entertainmentHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.entertainmentNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.entertainmentHeadlinesData=result.articles;
    })
  }

}
