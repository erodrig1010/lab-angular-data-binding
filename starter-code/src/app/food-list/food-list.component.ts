import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Array<any> = [];
  newItem = {name: "", calories: "", image: ""};
  showing:boolean = false;

  todaysFoods:Array<any> = [];
  todaysCalories:number = 0;

  resultsArray:Array<any> = [];
  searchTerm:string = "";

  addNew():void {
    const newOne = {
      name: this.newItem.name, 
      calories: this.newItem.calories,
      image: this.newItem.image
    };
    this.foods.unshift(newOne);
    this.newItem = {name: "", calories: "", image: ""};
    this.showing = false;
  }

  showForm():void {
    this.showing = !this.showing;
  }

  addToTodayList(selectedFood):void {
    this.todaysFoods.push(selectedFood);
    this.todaysCalories += Number(selectedFood.calories);
  }

  filterFoods() {
    this.resultsArray = this.foods.filter((food => {
      return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    }))
  }


  constructor() { }

  ngOnInit() {
    this.foods = foods;
    this.resultsArray = this.foods;
  }

}
