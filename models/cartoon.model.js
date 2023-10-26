const mongoose = require("mongoose");

const cartoonSchema = new mongoose.Schema({
    cartoonId: {
        type:mongoose.SchemaTypes.ObjectId,
        required: true,
        unique: true,
    },
    cartoonName:{
       type:String,
       required: true,
       unique: true,
    },
    cartoonAvatar:{
        type:String,
        required: true,
        unique: true,
    },
    cartoonFoods: {
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default:() => Date.now(),
    },
    updatedAt: {
        type: Date,
        mutable: true,
        default: () => Date.now(),
    },

});
const Cartoon = mongoose.model("cartoon",cartoonSchema);
module.exports = Cartoon;