const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

mongoose.connect('mongodb+srv://Ruchi:Ruchivsaini%4047@cluster0.4wmbf.mongodb.net/Book-Search-App?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
