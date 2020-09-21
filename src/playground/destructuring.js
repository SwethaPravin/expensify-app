// const person = {
//   name: 'swetha',
//   age: 37,
//   location: {
//     city:'london',
//     temprature: 20
//   }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const { city, temprature} = person.location;

// if ( city && temprature) {
//   console.log(`${city}, ${temprature}`)
// };

//******************************************** */
// const book = {
//   title: 'some book',
//   author:'some author',
//   publisher: {
//     //name: 'someone'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log (publisherName);

//******************************************** */

//array destructuring

const item = ['Coffee' ,'£1','£2','£3' ];

const [itemName, , mSize] = item;

console.log (`Medium size ${itemName} is ${mSize}`);
