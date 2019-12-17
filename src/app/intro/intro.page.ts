import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide : 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [{
    title: 'Escucha tu música',
    subTitle: 'EN CUALQUIER LUGAR',
    description: 'Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
    icon: 'play',
    imageSrc: 'assets/img/logo.png',
    imageAlt: 'Platzi Music Logo'
  },
  {
    title: 'Titulo',
    subTitle: 'Subtitulo',
    description: 'Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
    icon: 'play',
    imageSrc: 'assets/img/logo.png',
    imageAlt: 'Platzi Music Logo'
  },
  {
    title: 'Titulo',
    subTitle: 'Subtitulo',
    description: 'Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
    icon: 'play',
    imageSrc: 'assets/img/logo.png',
    imageAlt: 'Platzi Music Logo'
  }];

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }
}
