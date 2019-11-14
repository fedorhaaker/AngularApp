export class ColorModel {

    public rgbaColor: string;

    constructor( 
        public r: number,
        public g: number,
        public b: number,
        public a: number,
        public name: string
        ){
            this.generateRgbaColor();
        }

    generateRgbaColor(){
        this.rgbaColor = `rgba(${this.r},${this.g},${this.b},${this.a})`;
        return this.rgbaColor;
    }

    getRgbaColor(){
        return this.generateRgbaColor();
    }
}
