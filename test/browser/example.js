var Table = window.Table

var data = [
  { id: 123123, desc: 'Something awesome', price: 1000.00 },
  { id: 245452, desc: 'Very interesting book', price: 11.45 },
  { id: 232323, desc: 'Yet another product', price: 555.55 },
  { id: 332323, desc: '中文产品', price: 555.55 }
]

var t = new Table()
var number2 = Table.number(2)

data.forEach(function (product) {
  t.cell('Product Id', product.id)
  t.cell('Description', product.desc)
  t.cell('Price, USD', product.price, number2)
  t.newRow()
})

t.sort(['Price, USD'])
t.total('Price, USD', {
  printer: number2
})

t.log()

Table.log(data, { price: { printer: number2 } })

Table.log(data[0])

document.getElementById('output').innerText = t + '\n\n' + t.printTransposed()
