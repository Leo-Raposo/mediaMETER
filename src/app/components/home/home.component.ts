import { Component, OnInit } from '@angular/core';
import { MediaListComponent } from '../../media-list/media-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MediaListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1feb94166e5f10449d65024b4e1bada213d13b2788df5fbcf7f80961e7f6261d?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49898899b73195196d038202a170f85bb37de1af7b02375d4427ae377fa92d47?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ed081ec2e30dae2a9f92eb6e639fda3dd530011070e7f68716c23cb15369345?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 3' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fefe403b8aafd068f3947d6b1f2d1134080b9054029fdef2b7f51b3a65c05a49?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 4' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1feb94166e5f10449d65024b4e1bada213d13b2788df5fbcf7f80961e7f6261d?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 5' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49898899b73195196d038202a170f85bb37de1af7b02375d4427ae377fa92d47?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 6' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ed081ec2e30dae2a9f92eb6e639fda3dd530011070e7f68716c23cb15369345?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 7' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fefe403b8aafd068f3947d6b1f2d1134080b9054029fdef2b7f51b3a65c05a49?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Movie 8' },
  ];

  games = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1feb94166e5f10449d65024b4e1bada213d13b2788df5fbcf7f80961e7f6261d?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49898899b73195196d038202a170f85bb37de1af7b02375d4427ae377fa92d47?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ed081ec2e30dae2a9f92eb6e639fda3dd530011070e7f68716c23cb15369345?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 3' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fefe403b8aafd068f3947d6b1f2d1134080b9054029fdef2b7f51b3a65c05a49?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 4' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1feb94166e5f10449d65024b4e1bada213d13b2788df5fbcf7f80961e7f6261d?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 5' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49898899b73195196d038202a170f85bb37de1af7b02375d4427ae377fa92d47?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 6' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ed081ec2e30dae2a9f92eb6e639fda3dd530011070e7f68716c23cb15369345?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 7' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fefe403b8aafd068f3947d6b1f2d1134080b9054029fdef2b7f51b3a65c05a49?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Game 8' },
    // ... mais jogos
  ];

  albums = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1feb94166e5f10449d65024b4e1bada213d13b2788df5fbcf7f80961e7f6261d?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49898899b73195196d038202a170f85bb37de1af7b02375d4427ae377fa92d47?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ed081ec2e30dae2a9f92eb6e639fda3dd530011070e7f68716c23cb15369345?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 3' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fefe403b8aafd068f3947d6b1f2d1134080b9054029fdef2b7f51b3a65c05a49?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 4' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1feb94166e5f10449d65024b4e1bada213d13b2788df5fbcf7f80961e7f6261d?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 5' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49898899b73195196d038202a170f85bb37de1af7b02375d4427ae377fa92d47?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 6' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ed081ec2e30dae2a9f92eb6e639fda3dd530011070e7f68716c23cb15369345?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 7' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fefe403b8aafd068f3947d6b1f2d1134080b9054029fdef2b7f51b3a65c05a49?placeholderIfAbsent=true&apiKey=41a7402f6dab483c82b6fcabc71f9215', alt: 'Album 8' },
    // ... mais álbuns
  ];

  constructor() { }

  ngOnInit(): void { }


}
