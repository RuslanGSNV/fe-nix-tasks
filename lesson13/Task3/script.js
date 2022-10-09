let field = document.querySelector('#field');


console.log(field.getBoundingClientRect().x.toFixed(0) + ' : ' + field.getBoundingClientRect().y.toFixed(0));
console.log(field.getBoundingClientRect().right.toFixed(0) + ' : ' + field.getBoundingClientRect().bottom.toFixed(0));
console.log((+field.getBoundingClientRect().x.toFixed(0) + field.clientLeft) +  ' : ' + (+field.getBoundingClientRect().y.toFixed(0) + field.clientTop));
console.log((+field.getBoundingClientRect().x.toFixed(0) + field.clientLeft + field.clientWidth) + ' : ' + (+field.getBoundingClientRect().y.toFixed(0) + field.clientTop + field.clientHeight));

console.log(field.getBoundingClientRect())



