var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.amount = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.amount] = value;
    this.amount++;
  },
  pop: function() {
    if (this.amount) {
      this.amount--;
    }
    var result = this.storage[this.amount];
    delete this.storage[this.amount];
    return result;
  },
  size: function() {
    return this.amount;
  }
};


