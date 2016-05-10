import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPost } from './IPost';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: '/app/posts.component.html'
})
export class PostsComponent implements OnInit, OnChanges {
    constructor(private http: Http) {
     }

     @Input()
     search: string;

     posts: IPost[];
     
    ngOnInit() {
        
     this.http.get('/api/articles.json')
        .map(res => res.json())
        .subscribe( (obj) => {
          this.posts = obj;  
        }); 
        
    }
    
    ngOnChanges() {
      this.http.get('/api/articles.json')
        .map(res => res.json())
        .subscribe( (obj: IPost[]) => {
          this.posts = obj.filter((value: IPost) => {
              if(!this.search) {
                  return true;
              }
              return value.title.indexOf(this.search) >= 0;
          });
        }); 
         
    }

}