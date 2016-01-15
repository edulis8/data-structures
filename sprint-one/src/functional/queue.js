var Queue = function(){
  var size = 0;
  var tail = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    size++;
    storage[tail] = value;
    tail++;
  };

  //  1   2
  // [a] [b] // size 2; tail 2;
  // head: 1     - > dequeue
  // [] [b] // size 1; tail 2;
  // head: 2      - > enqueue
  // [] [b] [c] // size: 2; tail 3;
  // head: 2 - > dequeue
  // [] [] [c] // size: 1; tail: 3;
  // head: 3;

  someInstance.dequeue = function(){
    var head = tail - size;
    var result = storage[head]; // 1
    delete storage[head];
    if (size) {
      size--;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
