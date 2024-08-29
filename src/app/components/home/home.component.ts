import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { MediaListComponent } from '../../media-list/media-list.component';
import { MediaModel } from '../../models/media.model';
import { MediaResponse } from '../../models/media-response.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MediaListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: MediaModel[] = [];
  games: MediaModel[] = [];
  albums: MediaModel[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    console.log('Initial Movies:', this.movies);
    console.log('Initial Games:', this.games);
    console.log('Initial Albums:', this.albums);
    this.fetchMovies();
    this.fetchGames();
    this.fetchAlbums();
    console.log('After Fetch Movies:', this.movies);
    console.log('After Fetch Games:', this.games);
    console.log('After Fetch Albums:', this.albums);
  }

  fetchMovies(): void {
    this.mediaService.getMedias({ size: 30 }).subscribe((response: MediaResponse) => {
      this.movies = response.content.filter(media => media.mediaType.name === 'Movie');
    });
  }

  fetchGames(): void {
    this.mediaService.getMedias({ size: 30 }).subscribe((response: MediaResponse) => {
      this.games = response.content.filter(media => media.mediaType.name === 'Game');
    });
  }

  fetchAlbums(): void {
    this.mediaService.getMedias({ size: 30 }).subscribe((response: MediaResponse) => {
      this.albums = response.content.filter(media => media.mediaType.name === 'Album');
    });
  }
}
