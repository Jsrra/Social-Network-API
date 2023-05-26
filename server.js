const express = require('express');
const mongoose = require("mongoose");
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });

mongoose.set("debug", true);

app.use(require(routes));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));



// mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-api", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });