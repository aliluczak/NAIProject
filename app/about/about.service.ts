
import {About} from './about.model';
@Injectable()
export class AboutService {

    constructor(private http: Http) {
    }

    getAbout () : About{
       // return this.http.get('app/movie-list/movies.json') //'http://localhost:8081/api/movies')
         return this.http.get('http://localhost:8081/api/movies')
     // return this.http.get('app/movie-list/movies.json')
            .map((res) => this.extractData(res));
    }
}