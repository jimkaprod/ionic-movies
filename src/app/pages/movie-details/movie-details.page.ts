import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection?: any;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Production_company[];
	production_countries: Production_country[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: Spoken_language[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Genre {
	id: number;
	name: string;
}

export interface Production_company {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface Production_country {
	iso_3166_1: string;
	name: string;
}

export interface Spoken_language {
	english_name: string;
	iso_639_1: string;
	name: string;
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie$!: Observable<Movie>;
  imageBaseUrl = environment.images + '/w400';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot?.paramMap?.get('id') as string;
    this.movie$ = this.movieService.getMovieDetails(id);
  }

  openHomePage(url: string) {
    window.open(url, '_blank');
  }

}
