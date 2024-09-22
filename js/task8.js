
function treeByLevels(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}

// Example usage:

// Example 1
const tree1 = new Node(2, 
    new Node(8, new Node(1), new Node(3)), 
    new Node(9, new Node(4), new Node(5))
);
console.log(treeByLevels(tree1)); // [2, 8, 9, 1, 3, 4, 5]

// Example 2
const tree2 = new Node(1, 
    new Node(8, null, new Node(3)), 
    new Node(4, null, new Node(5, null, new Node(7)))
);
console.log(treeByLevels(tree2)); // [1, 8, 4, 3, 5, 7]

// Example 3
const tree3 = new Node(10, 
    new Node(6, new Node(3), new Node(8)), 
    new Node(15, new Node(12), new Node(20))
);
console.log(treeByLevels(tree3)); // [10, 6, 15, 3, 8, 12, 20]