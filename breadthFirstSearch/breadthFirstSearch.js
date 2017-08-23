/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * You can read about it here: https://en.wikipedia.org/wiki/Breadth-first_search
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

const breadthFirstSearch = (tree, value) => {
  const queue = [];

  const check = (treeObj) => {
    Object.keys(treeObj).forEach((prop) => {
      if (typeof treeObj[prop] === 'object') check(treeObj[prop]);
      queue.push(treeObj[prop]);
    });
  };
  check(tree);
  
  while (queue.length > 0) {
    if (queue[0] === value) return true;
    queue.shift();
  }
  return false;
};
