const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
   
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: false,
    },
    preparationTime: {
      type: Number,
      required: false,
    },
    people: {
      type: Number,
      required: false,
    },
    shortDesc: {
      type: String , 
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
