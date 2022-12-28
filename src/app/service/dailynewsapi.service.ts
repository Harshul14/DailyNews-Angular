import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailynewsapiService {

  constructor(private _http: HttpClient) { }

  //top headline API
  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9e4f9f612d564ca29571be6303354928';
  //sports
  sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9e4f9f612d564ca29571be6303354928'
  //health
  healthNews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9e4f9f612d564ca29571be6303354928'
  //science
  scienceNews = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9e4f9f612d564ca29571be6303354928'
  //entertainment
  entertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9e4f9f612d564ca29571be6303354928'
  //technology
  technologyNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9e4f9f612d564ca29571be6303354928'
  //business
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9e4f9f612d564ca29571be6303354928'

  dailyNewsHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }

  sportsNewsHeadlines(): Observable<any> {
    return this._http.get(this.sportsNews);
  }

  healthNewsHeadlines(): Observable<any> {
    return this._http.get(this.healthNews);
  }

  scienceNewsHeadlines(): Observable<any> {
    return this._http.get(this.scienceNews);
  }

  entertainmentNewsHeadlines(): Observable<any> {
    return this._http.get(this.entertainmentNews);
  }

  technologyNewsHeadlines(): Observable<any> {
    return this._http.get(this.technologyNews);
  }

  businessNewsHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }
}
