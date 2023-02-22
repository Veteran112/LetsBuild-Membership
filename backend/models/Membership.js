const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MembershipSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    annual: {
        type: Number,
        required: true,
    },
    bids: {
        type: Number,
        required: true,
    },
    skills: {
        type: Number,
        required: true,
    },
    rewards: {
        type: Boolean,
        required: false,
    },
    freeSealed: {
        type: Boolean,
        required: false,
    },
    eligible: {
        type: Boolean,
        required: false,
    },
    coverPhoto: {
        type: Boolean,
        required: false,
    },
    highlighted: {
        type: Number,
        required: false,
    },
    extensions: {
        type: Boolean,
        required: false,
    },
});

const Membership = mongoose.model("membership", MembershipSchema);

module.exports = Membership;