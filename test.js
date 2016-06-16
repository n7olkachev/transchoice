let assert = require('assert')
let trans = require('./index.js')

let bag = {
    'products' : 'товар|товара|товаров',
    'keys'     : 'ключ|ключа|ключей',
}

let transChoice = trans(bag)('ru')

assert.equal('товара', transChoice('products', 3))
assert.equal('товар', transChoice('products', 1))
assert.equal('товаров', transChoice('products', 7))

console.log('All tests passed!')
