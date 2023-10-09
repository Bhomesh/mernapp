const mongoose = require("mongoose");
const { findRenderedDOMComponentWithTag } = require("react-dom/test-utils");


mongoose.set('strictQuery', true);

const mongoURI =
  "mongodb://localhost:27017/mernapp";

const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log("Connected to MongoDB");

    // Fetch data from the "food" collection
    const foodCollection = mongoose.connection.db.collection("users");
    const data = await foodCollection.find({}).toArray();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
  global.food_items = data;
};

module.exports = connectToMongoDB;
