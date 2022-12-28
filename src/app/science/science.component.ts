import { Component, OnInit } from '@angular/core';
import { DailynewsapiService } from '../service/dailynewsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private api: DailynewsapiService) { }
  scienceHeadlinesData: any = [];
  ngOnInit(): void {
    this.api.scienceNewsHeadlines().subscribe((result) => {
      console.log(result.articles);
      this.scienceHeadlinesData=result.articles;
    })
  }

}
