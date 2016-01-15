var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // this = object.create(proto)
  this.amount = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.amount] = value;
  this.amount++;
};

Stack.prototype.pop = function(){
  if (this.amount) {
    this.amount--;
  }
  var result = this.storage[this.amount];
  delete this.storage[this.amount];
  return result;

};

Stack.prototype.size = function() {
  return this.amount;
};


