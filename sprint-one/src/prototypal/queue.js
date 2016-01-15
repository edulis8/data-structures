var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.amount = 0;
  obj.tail = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.amount++;
    this.tail++;
  },
  dequeue: function() {
    var head = this.tail - this.amount;
    if (this.amount) {
      this.amount--;
    }
    return this.storage[head];
  },
  size: function() {
    return this.amount;
  }
};


