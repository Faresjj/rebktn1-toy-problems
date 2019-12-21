/*

In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

You must check within string (s) to fid all of the mating pairs, and return a string containing only them. Line them up for inspection.

Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

Return an array containing a string of only the mating pairs available. e.g:

'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

and true if the number is more than or equal to x, false if not:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

x will always be a positive integer, and s will never be empty

- regular expression is not allow 


*/

// I solved it by creating tow varibles an array and a string and a for loop to loop throug the string and fing the wanted elements and after it exits thre loop it will check for the length of the new string if it's zero then it will return an empty string. 
// if not it will push the string in the array and chek for how many oaiers we found and compare it with the number and finnaly return the array;

function pairsOfBears(number, string) {
	var array = [];
	var str = '';

	for (var i = 0; i < string.length; i++) {
		if ( (string[i] === 'B' && string[i + 1] === '8') || (string[i] === '8' && string[i + 1] === 'B') ) {
			str += string[i] + string[i + 1];
		}
		if (string[i + 2] === 'B' || string[i + 2] === '8' ) {
			i++;
		}
	}
	if (str.length === 0) {
		return str;
	}
	array.push(str);
	if (str.length / 2 === number) {
		array.push('true');
	} else {
			array.push('false');
		}

	return array;
}

pairsOfBears(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj');