import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MediaService } from '../../services/media.service';
import { MediaModel } from '../../models/media.model';

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

  constructor(private route: ActivatedRoute, private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaId = this.route.snapshot.params['id'];
    this.mediaService.getMediaById(this.mediaId).subscribe(media => {
      this.media = media;
    });
  }
}
