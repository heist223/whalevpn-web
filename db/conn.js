const { MongoClient } = require('mongodb');
const connectionString = "mongodb+srv://heist223:FN4Fi2oSDXXK0XnA@cluster0.f0pnbf7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

let accountsCollection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('whalevpn');

      accountsCollection = dbConnection.collection("accounts")
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },

  getAccountsCollection: function() {
    return accountsCollection 
  },
};