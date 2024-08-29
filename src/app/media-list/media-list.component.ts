import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModel } from '../models/media.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  @Input() title: string = '';

  @Input() items: MediaModel[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor() { }

  ngOnInit(): void {

  }

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;


    return this.items.slice(start, end).map(media => ({
      id: media.id,
      src: media.photo,
      alt: media.name
    }));
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
