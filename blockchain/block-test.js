const Block = require('./block');

// Assuming your Block constructor takes four parameters,
// you should only create one instance with the given arguments.
const block = new Block('foo', 'bar', 'zoo', 'baz');

console.log(block.toString());
