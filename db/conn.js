const { MongoClient } = require('mongodb');
const connectionString = "<YOUR-MONGODB-URI>";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

let usersCollection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('<DATABASE-NAME>');

      usersCollection = dbConnection.collection("<COLLECTION-NAME>")
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },

  getUsersCollection: function() {
    return usersCollection
  },
};