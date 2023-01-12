const mongoose = require('mongoose');

mongoose.connect(
  process.eventNames.MONGODB_URI || "mongodb://127.0.0.1:27017/wish-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;