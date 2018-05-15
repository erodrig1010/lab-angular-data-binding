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

  addNew():void {
    const newOne = {
      name: this.newItem.name, 
      calories: this.newItem.calories,
      image: this.newItem.image
    };
    this.foods.push(newOne);
    this.newItem.name = "";
    this.newItem.calories = "";
    this.newItem.image = "";
    this.showing = false;
  }

  showForm():void {
    if(this.showing = false) {
      this.showing = true;
    }
    else {
      this.showing = true;
    }
  }


  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

}
