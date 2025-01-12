//DFS binary tree traversal

function dfs(node, arr = []) {
    if (!node) return;

    if(node.left) dfs(node.left, arr);
    if(node.right) dfs(node.right, arr);
    arr.push(node.val);

    return arr;
}
