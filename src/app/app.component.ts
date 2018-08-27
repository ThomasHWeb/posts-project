import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Illius mare montis abstractas quas quas quas pedes Gnaeus Orontes Gnaeus pedes funditur Pompeius quas provincias pedes Orontes imosque mare celsi imosque ambiens regnis pedes praetermeans Cassii Parthenium funditur Romanae.',
      loveIts: 4,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Illius mare montis abstractas quas quas quas pedes Gnaeus Orontes Gnaeus pedes funditur Pompeius quas provincias pedes Orontes imosque mare celsi imosque ambiens regnis pedes praetermeans Cassii Parthenium funditur Romanae.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Illius mare montis abstractas quas quas quas pedes Gnaeus Orontes Gnaeus pedes funditur Pompeius quas provincias pedes Orontes imosque mare celsi imosque ambiens regnis pedes praetermeans Cassii Parthenium funditur Romanae.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
