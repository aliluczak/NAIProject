import { Component, OnInit } from '@angular/core'; 
import { Movie } from './movie.model';
import { MovieService } from './movieList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-movie-list',
    templateUrl: 'app/movie-list/movie-list.component.html',
    styleUrls: [ 'app/movie-list/movie-list.component.css' ],
    providers: [ MovieService ]
})
export class MovieListComponent implements OnInit {

    public movies:Array<Movie> = [];

    public static categories:Array<string> = [];

    constructor(private movieService: MovieService,
        private activatedRoute: ActivatedRoute) {
    }

    get categoriesArray(){
        return MovieListComponent.categories;
    }

    ngOnInit () {
        this.activatedRoute.params.subscribe((param) => {
            this.movieService.getMovies(param.category).subscribe( //
                data => {
                    this.movies = data;
                     if(MovieListComponent.categories.length === 0){
                        this.movies.forEach((movie : Movie) => {
                             let currentCategories : string[];
                             let category : string;
            
                             currentCategories = movie.categoryIds;
                            console.log(movie + " " + currentCategories);         
                            let i = 0;
                            currentCategories.forEach(category => {
                                     if(MovieListComponent.categories.indexOf(category) === -1){
                                           MovieListComponent.categories.push(category);
                                           console.log(MovieListComponent.categories);  
                                        }
                            });
                            
                        });
                         //console.log(' kategorie: ' + this.categories);
                     }    
                 }
            );
        });
    }
} 