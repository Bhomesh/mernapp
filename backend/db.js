const mongoose = require("mongoose");
const { findRenderedDOMComponentWithTag } = require("react-dom/test-utils");

mongoose.set('strictQuery', true);

const mongoURI =
  "mongodb+srv://bhomeshrazdanwork:69@cluster0.tqloona.mongodb.net/mernnn";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log("---", err);
      } else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food category");
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(data);
          else console.log(data);
        });
      } 
    }
  );
};

module.exports = mongoDB;
// fetched_data.find({}).toArray(function(err, data)
