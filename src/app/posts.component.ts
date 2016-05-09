
import { Component, OnInit, Output, OnChanges, Input, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPost } from './IPost';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: './app/posts.component.html'
})
export class PostsComponent implements OnInit, OnChanges {
    constructor(private http: Http) { }

    @Output()
    select: EventEmitter<any> = new EventEmitter();

    @Input()
    filter: string;

    posts: IPost[];

    ngOnInit() { 
        
        this.http.get('/api/articles.json')
        .map( (res: Response) => res.json())
        .subscribe(obj => {
            this.posts = obj;
        });
    }
    
    ngOnChanges() {
        this.http.get('/api/articles.json')
        .map( (res: Response) => res.json())
        .subscribe( (obj: any[]) => {
            this.posts = obj.filter( (post: IPost) => {
                return post.title.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
            } );
        });
    }
    
    selectItem(post) {
        // console.log(post);
        this.select.emit(post);
    }

}