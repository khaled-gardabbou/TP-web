import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  favoriteMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }

  save(): void {
    localStorage.setItem('liked', 'true');
    this.favoriteMessage = "Merci d'avoir aimé nos produits!";
  }
}
