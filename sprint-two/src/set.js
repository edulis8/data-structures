// prototype pattern

var Set = function(){
  var set = Object.create(setPrototype);

  set._storage = {};

  return set;
};

var setPrototype = {};
// An .add() method, takes any string and adds it to the set
setPrototype.add = function(item){
  this._storage[item] = null;
};
// A .contains() method, takes any string and returns a
// boolean reflecting whether it can be found in the set
setPrototype.contains = function(item){
  return item in this._storage // Who you gunna call?
};
// A .remove() method, takes any string and removes it from the set, if present
setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
