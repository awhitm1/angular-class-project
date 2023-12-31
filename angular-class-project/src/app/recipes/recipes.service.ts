import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.services";


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
    'A super-tasty Schnitzel - just awesome!',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Big Fat Burger',
    'YEAH Baby!!!',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat Patty', 1),
      new Ingredient('Lettuce', 1),
      new Ingredient('Cheese Slice', 1),
      new Ingredient('Bacon Slice', 2),
      new Ingredient('Tomato Slice', 1),
      new Ingredient('Pickles', 4)
    ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
