// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function arrayCeption(array) {
    var max = 0, counter ;
     array.forEach(function(item) {
       if(item.length === 0) {
         counter = 0;
       } else if(Array.isArray(item)) {
         counter = arrayCeption(item);
         if(counter > 0) counter +=1;
       } else counter = 1;
       
     if(counter > max ) max = counter ;
     });
     
   
     return max ;
      
   }