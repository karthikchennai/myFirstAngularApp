import { RecipeModel } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipeList: RecipeModel[] = [
    new RecipeModel('Biriyani',   'India Food mostly liked in south india', 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Chicken_Biryani.jpg'),
    new RecipeModel('Idly',   'South Indian Breakfast, Healty food', 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Chicken_Biryani.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
