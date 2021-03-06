var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
// var p5 = new Promise((resolve, reject) => {
//   setTimeout(()=> reject('rejected'), 2000, 'four');
// });

Promise.all([p1, p2, p3, p4]).then(values => {
  console.log('Success:', values);
}).catch( reason => {
  console.log('Error:', reason);
});
