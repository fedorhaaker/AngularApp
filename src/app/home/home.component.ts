import { Component, OnInit } from '@angular/core';
import {City} from "../shared/model/city.model";
import { ColorModel } from '../shared/model/color-model';
import { ColorModelService } from '../services/color-model.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myName = 'klik hier';
  yourName: string;
  sliderValueR = 128;
  sliderValueG = 128;
  sliderValueB = 128;
  sliderValueA = 128;
  editState = false;
  newState = true;
  currentRgbaColor: string;
  currentColorBox: ColorModel;
  colorArray: ColorModel[] = [];
 

  constructor(private colormodelService: ColorModelService) { 

  
  }

  ngOnInit() {

    this.colorArray = this.colormodelService.colorArray;
    this.currentColorBox = this.colormodelService.getDefaultColor();
    this.onChangeSlider();
  }

  changeRGB(){}

  onClicColorButton(color: string){
    this.currentRgbaColor = color;
  }

  onChangeSlider(){
    this.currentRgbaColor = this.currentColorBox.getRgbaColor();
    
  }

  onUpdateColorbox(event: ColorModel){

    this.editState = true; 
    this.newState = false;  
    this.currentColorBox = event;
    console.log(this.currentColorBox);
    this.onChangeSlider();
    this.colormodelService.storeColors();
  }

  onDeleteColorbox(event: ColorModel){
    this.editState = false; 
    this.newState = true;  
    const inx = this.colorArray.indexOf(event);
    this.colorArray.splice(inx);
  }

  onAddColor(){
    this.editState = true; 
    this.newState = false;  
    this.currentColorBox = this.colormodelService.getDefaultColor();
    this.colorArray.push(this.currentColorBox);
    this.colormodelService.storeColors();

  }

  onChangeColor(){
    this.editState = false;
  }



}
