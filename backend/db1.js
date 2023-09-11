const mongoose = require("mongoose");
const { findRenderedDOMComponentWithTag } = require("react-dom/test-utils");

const mongoURI =
  "mongodb+srv://bhomeshrazdanwoZqrk:123@cluster0.tqloona.mongodb.net/mernnn?retryWrites=true&w=majority";

const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log("Connected to MongoDB");

    // Fetch data from the "food" collection
    const foodCollection = mongoose.connection.db.collection("food");
    const data = await foodCollection.find({}).toArray();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = connectToMongoDB;
