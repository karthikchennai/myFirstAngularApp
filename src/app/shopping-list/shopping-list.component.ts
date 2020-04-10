import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredientList: Ingredient[] = [
  new Ingredient( 'Apple' , '28'),
  new Ingredient( 'Orange' , '40')
];

  constructor() { }

  getIngredientValue(ingredient: Ingredient){
    this.ingredientList.push(ingredient);

  }

  ngOnInit(): void {
  }

}
