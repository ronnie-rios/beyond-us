const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      // required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      // required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

module.exports = commentSchema;
