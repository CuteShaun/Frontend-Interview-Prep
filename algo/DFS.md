
# Depth-First Search (DFS)  

## What is DFS?  
DFS is a graph/tree traversal algorithm that explores as deep as possible before backtracking. It is useful for solving problems that require exhaustive search, pathfinding, or backtracking.  

## When to Use DFS?  

- **Exhaust All Possibilities** → When checking all potential solutions before deciding the best one (e.g., solving a maze).  
- **Count All Possible Paths** → When finding every way from source to destination (e.g., counting ways to reach a target).  
- **Backtracking Problems** → When solving problems that involve undoing decisions (e.g., Sudoku, N-Queens).  
- **Detecting Cycles in a Graph** → When checking if a directed or undirected graph has cycles.  
- **Navigating File System Structures** → When recursively searching directories (e.g., searching for a file).  

```javascript
//DFS binary tree traversal stack (pre-order)
function dfs(node) {
  if (!node) return;

  const stack = [node];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}
```

```javascript
//DFS binary tree traversal recursion (pre-order)

function dfs(node, arr = []) {
    if (!node) return;

    arr.push(node.val);
    if(node.left) dfs(node.left, arr);
    if(node.right) dfs(node.right, arr);

    return arr;
}
```

## Comparison Table  

| Feature                         | Recursive Approach             | Stack-Based Approach           |
|----------------------------------|--------------------------------|--------------------------------|
| Memory Usage                    | Higher (due to call stack)     | Lower (explicit stack)         |
| Handles Deep Trees               | ❌ Risk of stack overflow      | ✅ Avoids call stack limits     |
| Performance (shallow trees)      | ✅ Generally faster            | ❌ Slightly slower              |
| Code Readability                 | ✅ More concise, easier to read| ❌ More complex                 |


## Complexity Analysis

- **V**: Number of nodes (vertices) in a graph.
- **E**: Number of edges (connections) between nodes.
- **H**: Means the height of the tree
---
- **Graph (Adjacency List):** **O(V + E)** (visits each node and edge once).
- **Tree (Binary Tree):** **O(N)** (visits each node once).
---
- **Recursive DFS:** **O(V)** (due to call stack depth).
- **Stack-Based DFS:** **O(V)** (explicit stack).

### Complexity Table

| Case                        | Time Complexity | Space Complexity |
|-----------------------------|-----------------|------------------|
| **Graph (Adjacency List)**   | O(V + E)        | O(V)             |
| **Tree (Binary Tree)**       | O(N)            | O(H)             |
| **Worst Case (Deep Recursion)** | O(V + E)        | O(V)             |
