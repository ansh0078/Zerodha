const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PostionsModel = new model("position", PositionsSchema);

module.exports = { PostionsModel };