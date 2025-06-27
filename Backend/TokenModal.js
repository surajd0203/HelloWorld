import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token : {
        type : String,
        required : true,
        unique : true,
        index : true
    },

    instanceId : {
        type : String,
        require : true,
        index : true
    }
})

const Token = mongoose.model("Token", tokenSchema);

export default Token;