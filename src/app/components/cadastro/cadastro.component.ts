import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MediaService } from '../../services/media.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  mediaTypes$: Observable<any[]> = of([]);
  idioms$: Observable<any[]> = of([]);
  platforms$: Observable<any[]> = of([]);
  genres$: Observable<any[]> = of([]);
  teams$: Observable<any[]> = of([]);

  constructor(private fb: FormBuilder, private mediaService: MediaService) {
    this.cadastroForm = this.fb.group({
      mediaType: ['', Validators.required],
      language: ['', Validators.required],
      name: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', Validators.required],
      platform: ['', Validators.required],
      photo: [null],
      description: [''],
      teamMemberName: [''],
      teamMemberRole: ['']
    });
  }

  ngOnInit() {
    this.mediaTypes$ = this.mediaService.getMediaTypes();
    this.idioms$ = this.mediaService.getIdioms();
    this.platforms$ = this.mediaService.getPlatforms();
    this.genres$ = this.mediaService.getGenres();
    this.teams$ = this.mediaService.getTeams();
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('mediaTypeId', this.cadastroForm.get('mediaType')?.value);
    formData.append('idiomId', this.cadastroForm.get('language')?.value);
    formData.append('name', this.cadastroForm.get('name')?.value);
    formData.append('genreId', this.cadastroForm.get('genre')?.value);
    formData.append('releaseDate', this.cadastroForm.get('releaseYear')?.value);
    formData.append('platformId', this.cadastroForm.get('platform')?.value);
    formData.append('description', this.cadastroForm.get('description')?.value);

    const userMediaId = '1';
    formData.append('userMediaId', userMediaId);

    if (this.cadastroForm.get('photo')?.value) {
      formData.append('photo', this.cadastroForm.get('photo')?.value);
    }

    this.mediaService.createMedia(formData).subscribe({
      next: (response) => console.log('Mídia criada com sucesso', response),
      error: (error) => console.error('Erro ao criar mídia', error)
    });
  }

  onFileChange(event: any, fieldName: string) {
    const file = event.target.files[0];
    if (file) {
      this.cadastroForm.patchValue({ [fieldName]: file });
    }
  }
}
