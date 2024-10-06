class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let select = this.root;

    if (select === null) {
      this.root = new Node(val);
      return this;
    } else {

      // Go iteratively through tree
        while (true) {

          // Going right direction when val > select
          if (val > select.val) {
            // If you cannot go right, make a new Node
              if (select.right === null) {
                select.right = new Node(val);
                break;
              }
              select = select.right;
          }
          // Go left direction when val < select
          else if (val < select.val) {
            // Set as new node if there is no left node
              if (select.left === null) {
                select.left = new Node(val);
                break;
              }

              // If not, go left
              select = select.left;
          } else {
              return "Val already exists"; // For same entries
          }
        }
    }

    // Return the tree
    return this;

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    // Call tree
    const tree = this;

    // If no root, set to root
    if (!this.root) {
      this.root = new Node(val)
      return this;
    }

    else {
      function insert(n) {
        if (val > n.val) {
          if(!n.right) {
            n.right = new Node(val)
            return tree;
          }
          return insert(n.right)
        } else if (val < n.val) {
          if (!n.left) {
            n.left = new Node(val)
            return tree;
          }
          return insert(n.left);
        }
        return tree;
      }
      return insert(tree.root);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let select = this.root
    while(select) {
      if(val == select.val) return select
      else if(val > select.val) select = select.right
      else if(val < select.val) select = select.left
    }
    return
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const tree = this;

    // in case root is not present
    if(!this.root) {
      this.root = new Node(val)
      return this
    }
    else {
      function find(n) {
        if(val == n.val) return n
        else if(val > n.val) {
          if(!n.right) {
            return
          }
          return find(n.right)
        } else if(val < n.val) {
            if(!n.left) {
              return
            }
            return find(n.left)
        }
        return tree
      }
      return find(tree.root)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = []

    if(!this.root) {
      return arr
    }

    const tree = this

    function direction(n) {
      arr.push(n.val)
      if(n.left) direction(n.left)
      if(n.right) direction(n.right)
    }

    direction(this.root)
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = []

    if(!this.root) {
      return arr
    }

    const tree = this

    function direction(n) {
      if(n.left) direction(n.left)
      arr.push(n.val)
      if (n.right) direction(n.right)
    }

    direction(this.root)
    return arr

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = []

    if(!this.root) {
      return arr
    }

    const tree = this

    function direction(n) {
      if(n.left) direction(n.left)
      if(n.right) direction(n.right)
      arr.push(n.val)
    }

    direction(this.root)
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

//   remove(val) {

//   }

//   /** Further Study!
//    * isBalanced(): Returns true if the BST is balanced, false otherwise. */

//   isBalanced() {

//   }

//   /** Further Study!
//    * findSecondHighest(): Find the second highest value in the BST, if it exists.
//    * Otherwise return undefined. */

//   findSecondHighest() {
    
//   }
}

module.exports = BinarySearchTree;
