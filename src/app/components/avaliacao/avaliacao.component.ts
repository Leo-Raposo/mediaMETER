import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MediaService } from '../../services/media.service';
import { MediaModel } from '../../models/media.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avaliacao.component.html',
  styleUrls: ["./avaliacao.component.css"]
})
export class AvaliacaoComponent implements OnInit {
  mediaId!: number;
  media: MediaModel = new MediaModel();

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mediaId = this.route.snapshot.params['id'];
    this.mediaService.getMediaById(this.mediaId).subscribe(media => {
      this.media = media;
    });
  }
  deleteMedia(): void {
    if (confirm('Tem certeza de que deseja excluir esta mídia?')) {
      this.mediaService.deleteMedia(this.mediaId).subscribe(
        response => {
          alert('Mídia excluída com sucesso');
          this.router.navigate(['/path/to/redirect']);
        },
        error => {
          alert('Erro ao excluir a mídia');
        }
      );
    }
  }
}
