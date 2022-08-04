// array VS object
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 15,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const Values = Object.values(shoppingCart);
console.log(Values);
// var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);

}

// for in loop

for (var propertyName in shoppingCart) {
    const values = shoppingCart[propertyName];
    console.log(propertyName, values);
}