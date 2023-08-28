const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://likithgowda18:Likithgowda18@cluster0.e81ldjg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

client.connect();

module.exports = client;