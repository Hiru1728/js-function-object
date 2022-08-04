var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 15
}
// when you know the specific property name, use dot notation  to get the property value
var penCount = shoppingCart.pen;

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);
// alternative System
// when you know the specific property name, use dot notation  to get the property value
var penCount2 = shoppingCart['pen'];
var proparties = Object.keys(shoppingCart);
// console.log(penCount2);
// console.log(proparties);
var propertyValue = Object.values(shoppingCart);
// console.log(propertyValue);
console.log(shoppingCart);

// set Property values
shoppingCart.mouse = 15;
// console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
