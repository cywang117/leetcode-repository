/**
 * 894. All Possible Full Binary Trees
 * https://leetcode.com/problems/all-possible-full-binary-trees/
 * Javascript solution
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */

const allPossibleFBT = function (N) {
  let poss = [];
  // No possible FBT with even number of nodes
  if (N % 2 === 0) {
    return poss;
  }

  if (memo[N]) {
    return memo[N];
  } else {
    // For each odd combination adding up to N - 1, add combinations to memo
    for (let i = 1; i < N - 1; i += 2) {
      if (!memo[i]) {
        memo[i] = allPossibleFBT(i);
      }
    }

    // Generate combinations based on memo
    let oddNodeCounts = getOddsLessThanOddN(N);
    while (oddNodeCounts.length) {
      let root = new TreeNode();
      let front, back;

      if (oddNodeCounts.length === 1) {
        front = back = oddNodeCounts.pop();
      } else {
        front = oddNodeCounts.shift();
        back = oddNodeCounts.pop();
      }

      memo[front].forEach(frontTreeNode => {
        memo[back].forEach(backTreeNode => {
          root.left = frontTreeNode;
          root.right = backTreeNode;
          poss.push(clone(root));
          if (front !== back) {
            root.right = frontTreeNode;
            root.left = backTreeNode;
            poss.push(clone(root));
          }
        });
      });
    }
    memo[N] = poss;
    return poss;
  }
};

let memo = {
  1: [new TreeNode()]
};

/**
 * UTILS
 */
/**
 * Clone a TreeNode to deal prevent mutation in allPossibleFBT
 * @param {TreeNode} treeNode
 * @returns {TreeNode}
 */
const clone = function (treeNode) {
  let clonedTreeNode = new TreeNode();
  if (treeNode.left) {
    clonedTreeNode.left = clone(treeNode.left);
  }
  if (treeNode.right) {
    clonedTreeNode.right = clone(treeNode.right);
  }
  return clonedTreeNode;
};

/**
 * Return all odd numbers less than odd input N
 * @param {Integer} N
 */
const getOddsLessThanOddN = function (N) {
  let res = [];
  for (let i = N - 2; i > 0; i -= 2) {
    res.push(i);
  }
  return res;
};
