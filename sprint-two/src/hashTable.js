// getIndexBelowMaxForKey

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    // keys array will have same length and line up with bucket
    var keys = bucket.map(function(value){
      return value[0];
    });
    var index = keys.indexOf(k);
    if(index >= 0){
      bucket[index][1] = v;
    } else {
      bucket.push([k, v]);
    }
  } else {
    this._storage.set(i, [[k, v]]);
  }
};

// if zeroth index of elements of limitedArray is k
//             0                  1
// [     k          v         k       v
//   0: [['Steven', 'Tyler'], ['Bob', 'Jones']],
//   1: [['Bob', 'Barker']],
//   2: [],
//   ...
// ]
//        0          1
// 3: [[v1, v1], [v2, v2]]

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === null) {
    return null;
  }
  // consider the 0th index of each element in bucket
  var keys = bucket.map(function(value){
    return value[0];
  });
  var index = keys.indexOf(k);
  // compare that to k
  if (index >= 0) {
    // if it is k return the 1st index
    return bucket[index][1];
  }
  // var keyValueArray = bucket[0]; // [v1,v1]
  // return keyValueArray[1]; // v1
};

HashTable.prototype.remove = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
