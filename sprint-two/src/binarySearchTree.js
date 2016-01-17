var BinarySearchTree = function(value){

  return {
    value: value,
    left: null,
    right: null,
    // A .insert() method, which accepts a value and places in the tree in the correct position.
    insert: function(val){
      if (val > this.value) {
        if(this.right === null) {
          this.right = BinarySearchTree(val);
        }
        this.right.insert(val);
      }
      if (val < this.value) {
        if(this.left === null){
          this.left = BinarySearchTree(val);
        }
        this.left.insert(val);
      }
    },
    contains: function(val) {
      // base case
      if (this.value === val) {
        return true;
      }
      // If there are no more nodes
      if (this.left === null && this.right === null) {
        return false;
      }
      return (this.left && this.left.contains(val)) || (this.right && this.right.contains(val));
    },
    depthFirstLog: function(iterator) {
      iterator(this.value);
      if (this.left) {
        this.left.depthFirstLog(iterator)
      }
      if (this.right) {
        this.right.depthFirstLog(iterator)
      }
    }
  };
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
