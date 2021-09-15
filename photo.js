class Photo{ 

    constructor (height = 8, width = 10){
        this.height = height;
        this.width = width;
   }

   price(){
       let finalPrice;
       
       if(this.height === 8 && this.width === 10){
       finalPrice = 4;
    }
    else if(this.height === 10 && this.width === 12){
        finalPrice = 6;
    }
    else{
        finalPrice = 10;
    }
    return finalPrice;
   }
   toString(){
       return "This is a " + this.height + " by " + this.width + " photo, and it costs " + this.price() + " dollars.";
   }
}



class MattedPhoto extends Photo{

    constructor(width = 8, height = 10){
        super(width, height);
    }
    price(){
     return super.price() + 10;
    }
    toString(){
        return "This is a Matted " + this.height + " by " + this.width + " photo, and it costs " + this.price() + " dollars.";
    }

}

class FramedPhoto extends Photo{
    constructor(width = 8, height = 10){
        super(width, height);
    }
    price(){
     return super.price() + 25;
    }
    toString(){
        return "This is a Framed " + this.height + " by " + this.width + " photo, and it costs " + this.price() + " dollars.";
    }
}


let photo1 = new Photo(12, 28);
let photo2 = new Photo(10, 12);
let photo3 = new MattedPhoto(8, 10);
let photo4 = new MattedPhoto(10, 12);
let photo5 = new FramedPhoto(8, 10);
let photo6 = new FramedPhoto(10, 12);

console.log(photo1.toString());
console.log(photo2.toString());
console.log(photo3.toString());
console.log(photo4.toString());
console.log(photo5.toString());
console.log(photo6.toString());
