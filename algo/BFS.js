//BFS binary tree traversal

const BFS = (root, arr = []) => {
    if(!root) return;
    let queue = [root];

    while(queue.length > 0) {
        if(queue[0].left) {
            queue.push(queue[0].left);
        } 
        
        if(queue[0].right) {
            queue.push(queue[0].right);
        }

        let removed = queue.shift();
        arr.push(removed);
    }

    return arr;
}
