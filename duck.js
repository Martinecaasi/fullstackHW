export default class Duck{
  name;
  color;
  age;
  weight;
  picture; 
  
constructor(name,color,age,weight,picture){
          this.name=name;
          this.color=color;
          this.age=age;
          this.weight=weight;
          this.picture=picture;
}

Show(){
          console.log('Name: ${this.name}');
          console.log('Color: ${this.color}');
          console.log('Age: ${this.age}');
          console.log('Weight: ${this.weight}');
          console.log('Picture: ${this.picture}');
}

Quack(){
          const quacks=Math.floor(2/(this.age*this.weight));
          for(let i=0; i<quacks;i++){
                    console.log("Quack");

                    //לא הצלחתי לשים קול 
          }
}

}