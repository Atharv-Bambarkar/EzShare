require('dotenv').config(  );

const mongoose = require('mongoose');


function connectDB() {
  //mongoose.connect(process.env.MONGO_URI,{useNewParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
  mongoose.connect(process.env.MONGO_URL);
  const connection = mongoose.connection;

  connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
  });


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectDB;