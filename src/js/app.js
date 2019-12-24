// TODO: write your code here
import canIterate from './canIterate';

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
canIterate([1, 3, 3]); // true
canIterate({ a: 100, b: 300 }); // false
