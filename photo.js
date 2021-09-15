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

let photo1 = new Photo(8, 10);
let photo2 = new Photo(12, 28);

console.log(photo1.toString());
console.log(photo2.toString());


class MattedPhoto extends Photo{

    constructor(width = 8, height = 10, mattedPhoto = true){

    }

}

class FramedPhoto extends Photo{

}