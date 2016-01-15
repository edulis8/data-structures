// functional pattern

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var result = list.head;
    delete list.head;
    list.head = result.next;
    return result.value;
  };

  list.contains = function(target, node){
    // check if target === node.value
    // if not, recursively check the next node
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else {
      if (node.next){
        return list.contains(target, node.next);
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
