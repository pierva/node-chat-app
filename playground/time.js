//Unix epic Jan 1st 1970 00:00:00 UTC

var moment = require('moment');
// var date = new Date();
//
// console.log(date.getMonth());

// var date = moment();
// console.log(date.format());
//
// console.log(date.format('MMM'));
// date.add(1, 'year').subtract(9, 'months');
//
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234565432;
var date = moment(createdAt);

console.log(date.format('h:m a'));
