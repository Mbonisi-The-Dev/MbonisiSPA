import { Component, Inject, Injectable, NgIterable, OnInit} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { sovtechs as Sovtechs } from "./sovtechAPI";
import { ApiService } from "./ApiService"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MbonisiSPA';
  People: any = []; 
  Chuck: any = [];
  Joke: any = [];
  Search: any = [];
  constructor(
    public apiService: ApiService  ) { }

   ngOnInit(){
     this.fetchPeople();
     this.fetchChuck();     
    }

   fetchPeople(){
     return this.apiService.getPeople().subscribe((res: {}) =>{
       this.People = res;
     })
   }

   fetchChuck(){
     return this.apiService.getChuck().subscribe((res: {}) => {
       this.Chuck = res;
     })
   }

   getJokeCategory(name: string){    
      this.apiService.getChuckCategory(name).subscribe((res: {}) =>{
        this.Joke = [];
        this.Joke.push(res);
      })    
   }

   search(name: string ){
   
     if(name.length <= 0){
       window.alert("Please enter a value in the search box");
              
     }
     else{
   
      this.apiService.getSearch(name).subscribe((res: {}) =>{
        this.Search = [];
        this.Search.push(res);
      })
     }
   }

}
