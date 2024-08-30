import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaModel } from '../models/media.model';
import { MediaResponse } from '../models/media-response.model';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = '/api/medias';

  constructor(private http: HttpClient) { }

  getMedias(params?: any): Observable<MediaResponse> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get<MediaResponse>(this.apiUrl, { params: httpParams });
  }

  getMediaById(id: number): Observable<MediaModel> {
    return this.http.get<MediaModel>(`${this.apiUrl}/${id}`);
  }

  createMedia(media: FormData): Observable<MediaModel> {
    return this.http.post<MediaModel>(this.apiUrl, media);
  }

  updateMedia(id: number, media: MediaModel): Observable<MediaModel> {
    return this.http.put<MediaModel>(`${this.apiUrl}/${id}`, media);
  }

  deleteMedia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMediaTypes(): Observable<any[]> {
    return this.http.get<any[]>('/api/mediastypes');
  }

  getIdioms(): Observable<any[]> {
    return this.http.get<any[]>('/api/idioms');
  }

  getPlatforms(): Observable<any[]> {
    return this.http.get<any[]>('/api/platforms');
  }

  getGenres(): Observable<any[]> {
    return this.http.get<any[]>('/api/genres');
  }

  getTeams(): Observable<any[]> {
    return this.http.get<any[]>('/api/teams');
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('API error. Try again.'));
  }
}
