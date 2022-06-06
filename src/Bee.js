var Bee = function(   ) {

  Grub.call(this);
  this.age =5;
  this.color = "yellow";
  this.job = "keep on growing";
};
Bee.prototype = Object.create(Grub.prototype);//this destroys the default Bee.prototype.constructor
Bee.prototype.constructor = Bee;//so we need to recreate it
//Bee.prototype = Grub.prototype//BAD:This makes them the same exact obj
//Bee.prototype = new Grub()//BAD:Creates a redundant instance

/*
class Bee extends Grub{
  constructor(){
    super();
    this.age = 5;
    this.color = "yellow";
    this.job = "keep on growing";
  }
  fly(){}
}
*/