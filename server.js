const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Succesfully connected with database!!");
  })
  .catch((err) => {
    console.log("Cannot connect with database!", err);
    process.exit();
  });
require('./routes/dataroutes')(app);



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});