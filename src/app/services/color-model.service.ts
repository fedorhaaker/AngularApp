import { Injectable } from '@angular/core';
import { ColorModel } from '../shared/model/color-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorModelService {

  colorArray:ColorModel[] = [];
  url = 'assets/colors.json';
  
  constructor(private http: HttpClient) {
     

    this.getColorArray();
     
  }

  getDefaultColor(): ColorModel{
    return new ColorModel(128,128,128,1, 'Grijs');
  }

  getColorArray(): ColorModel[]{
    this.colorArray = this.readColors();
    if(!this.readColors()){
      this.colorArray = [];
      this.colorArray.push(new ColorModel(0,0,0,1,'black'));
      this.colorArray.push(new ColorModel(255,255,255,1,'white'));
      this.colorArray.push(new ColorModel(255,0,0,1,'red'));
      this.colorArray.push(new ColorModel(0,255,0,1,'green'));
      this.colorArray.push(new ColorModel(0,0,255,1,'blue'));
    }
    return this.colorArray;
  }

  storeColors(){
    window.localStorage.setItem('customColors', JSON.stringify(this.colorArray))
  }

  readColors(): ColorModel[] {

    let colorlist: ColorModel[] = [];
    
    const resultColors:  ColorModel[] =  JSON.parse(window.localStorage.getItem('customColors'));
    resultColors.forEach(el => {
      colorlist.push(new ColorModel(el.r,el.g,el.b,el.a,el.name));
    });

    if(colorlist.length == 0){
      this.http.get(this.url).subscribe((data: ColorModel[])=>{
        console.log(data);
        data.forEach(el => {
          colorlist.push(new ColorModel(el.r,el.g,el.b,el.a,el.name));
        });
      })  
    }

    return colorlist;
  }




}
