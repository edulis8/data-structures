var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    tail: 0,
    amount: 0,
    storage: {}
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
    this.amount++;
  },
  dequeue: function() {
    var head = this.tail - this.amount;
    if(this.amount){
      this.amount--;
    }
    var result = this.storage[head];
    delete this.storage[head];
    return result;
  },
  size: function() {
    return this.amount;
   }
};

  //  0   1
  // [a] [b] // amount: 2; tail 2;
  // head: 0     - > dequeue
  // [] [b] // amount 1; tail 2;
  // head: 1      - > enqueue
  // [] [b] [c] // amount: 2; tail 3;
  // head: 1 - > dequeue
  // [] [] [c] // amount: 1; tail: 3;
  // head: 2;
