// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  //deleteMany

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((results) => {
  //   console.log(results)
  // })
  //
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((results) => {
  //   console.log(results)
  // })


    // db.collection('Todos').findOneAndDelete({completed: false}).then((results) => {
    //   console.log(results)
    // })

    db.collection('Users').findOneAndDelete({
       _id: new ObjectID('5a1fc499008b385f03cf6c06')}).then((results) => {
      console.log(results)
    })
  // db.close();

});
