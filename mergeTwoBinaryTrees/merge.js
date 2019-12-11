/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/


  //Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
     this.left = this.right = null;
 }
  // @param {TreeNode} t1
  // @param {TreeNode} t2
  // @return {TreeNode}
 
var mergeTrees = function(t1, t2) {
	//new child for the recursive function 
	// 
	//if we dont have value return / basecase

	//if we have node on the left 
		// recursively check it 
		//add to new merge(t1.left.value +t2.left.valu )

	//if we have node on the right 
		// recursively check it	
		//add to new merge(t1.right.value +t2.right.valu )
	}
