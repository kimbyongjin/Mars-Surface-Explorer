// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test');

// const db = mongoose.connection;

// db.on('error', () => {
//   console.log('mongoose connection error');
// });

// db.once('open', () => {
//   console.log('mongoose connected successfully');
// });

// const itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String,
// });

// const Item = mongoose.model('Item', itemSchema);

// const selectAll = (callback) => {
//   Item.find({}, (err, items) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// // TODO: build out feature allowing users to save noteworthy photo queries

// module.exports.selectAll = selectAll;
