import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  favoriteMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("liked") === "true") {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }

  save(): void {
    console.log("Button clicked!");
    localStorage.setItem("liked", "true");
    this.favoriteMessage = "Merci d'avoir aimé nos produits!";
  }
}