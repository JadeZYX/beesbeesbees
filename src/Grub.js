var Grub = function() {
  //this === the object that will be created
  this.age = 0;
  this.color = "pink";
  this.food = "jelly";
  this.eatTime = 0;
};
Grub.prototype.eat = function(){
  this.eatTime++;
}

var eric = new Grub();
//the new keyword
//-create a new object instance
//-connects this new object to <Constructor>.prototype using prototypal delegation
//-run the constructor func in the context of the new object
//-gives you the new object to use
