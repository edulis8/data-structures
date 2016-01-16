var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket
  var bucket = this._storage.get(i);
  // if !exist, create it
  if (! bucket ){
    bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;

  // iterate over bucket
  for (var j = 0; j < bucket.length; i++) {
    var tuple = bucket[j];
    // key exists?
    if(tuple[0] === k){
      // update it
      tuple[1] = v;
      found = true;
      break;
    }
  }

  // if no key was foun
  if (!found){
    // insert a new tuple
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket
  var bucket = this._storage.get(i);
  // if !exist, create it
  if (! bucket ){
    return null;  
  }

  // iterate over bucket
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(tuple[0] === k){
      return tuple[1];
    }
  }

  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket
  var bucket = this._storage.get(i);
  // if !exist, create it
  if (! bucket ){
    return null;  
  }

  // iterate over bucket
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];  
    if(tuple[0] === k){
       bucket.splice(j, 1);
       return tuple[1]; 
    }
  }

  return null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
