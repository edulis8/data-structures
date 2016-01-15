// Functional-shared pattern

var Tree = function(value){
  var newTree = {};
  newTree.value = value;


  // containing a number of subtrees
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};


// {
//   value: root,
//   children: [
//     {
//       value: x,
//       children: [],
//     }
//   ]
// }


var treeMethods = {};
// takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

// takes any input and returns a boolean reflecting
// whether it can be found as the value of the target node or any
// descendant node
treeMethods.contains = function(target){
  var exists = false;
  if(this.value === target){
    exists = true;
  }
  var search = function(target, children) {
    for(var i = 0; i < children.length; i++){
      if(children[i].value === target){
        exists = true;
      }
      search(target, children[i].children);
    }
    return exists;
  };
  return search(target, this.children);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
