// Graphs can be undirected,
// which means that the relationship of
// any 2 nodes connected by an edge is a symmetrical relationship

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  // this = Object.create(Graph.prototype)

  // return this;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {};
  this[node]['value'] = node;
  this[node]['edges'] = [];
};

// ------------------------
// Return a boolean value indicating if the value
// passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return node in this;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two
// specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this[fromNode].edges, this[toNode].value);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges.push(this[toNode].value);
  this[toNode].edges.push(this[fromNode].value);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this[fromNode].edges.indexOf(toNode);
  this[fromNode].edges.splice(fromIndex, 1);

  var toIndex = this[toNode].edges.indexOf(fromNode);
  this[toNode].edges.splice(fromIndex, 1);

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this, function(node, index, collection){
    var value = node.value;
    cb(value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



