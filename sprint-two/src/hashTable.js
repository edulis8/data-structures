// getIndexBelowMaxForKey

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)) {
    var nestedArray = this._storage.get(i);
    nestedArray.push([k, v]);
  } else {
    this._storage.set(i, [[k, v]]);
  }
};

// [     k          v         k       v
//   [['Steven', 'Tyler'], ['Bob', 'Jones']],   < -- Bucket
//   [],
//   [],
//   ...
// ]

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var keyValueArray = this._storage.get(i)[0];
  return keyValueArray[1];
};

HashTable.prototype.remove = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
