var manufacturers = [{ id: 'Samsung', price: 150 }, 
{ id: 'Microsoft', price:200 }, 
{ id: 'Apple', price:0 }, 
{ id: 'Micromax', price: 100 } ];
var test; 
console.log('Details of Manufacturer array are: ');
function myFunction() { 
test = manufacturers.filter((m) => 
m.price >= 150);
for (var item of test) { console.log(item.id); 
} 
} myFunction();