const mongoose = require("mongoose");
const { findRenderedDOMComponentWithTag } = require("react-dom/test-utils");

mongoose.set("strictQuery", true);

const mongoURI = "mongodb://localhost:27017/mernapp";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log("---", err);
      } else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "food_category"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.food_category = catData;
              // console.log(global.food_items)
            }
          });

          // if (err) console.log(data);
          // else {
          //   global.food_items = data;
          //   console.log(global.food_items);
        });
      }
    }
  );
};

module.exports = mongoDB;

// mongoexport --uri "mongodb+srv://bhomeshrazdanwork:69@cluster0.tqloona.mongodb.net/mernnn" --collection food --type=json --out output.json
