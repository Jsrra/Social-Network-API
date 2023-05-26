const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxLength: 280, minLenght: 1 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought; 
