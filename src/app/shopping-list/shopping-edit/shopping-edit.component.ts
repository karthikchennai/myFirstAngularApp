import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('inputName',{static : false}) inputName: ElementRef;
  @ViewChild('inputAmount',{static : false}) inputAmount: ElementRef;

  @Output('inputIngredient') inputIngredient = new EventEmitter<Ingredient>();

  ngOnInit(): void {
  }

  onAddIngredients(){
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.inputIngredient.emit(ingredient);
  }

}
