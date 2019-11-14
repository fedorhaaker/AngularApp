import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorModel } from '../shared/model/color-model';


@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {

  @Input() 
  color: ColorModel;

  @Output()
  delete = new EventEmitter();

  @Output()
  update = new EventEmitter();

  rgbaColor: string;

  constructor() { }

  ngOnInit() {

   this.rgbaColor = this.color.getRgbaColor();

  }

  OnClickUpdate(){
    this.update.emit(this.color);
    console.log('update');
  }

  onClickDelete(){
    this.delete.emit(this.color);
    console.log('delete');
  }

}
