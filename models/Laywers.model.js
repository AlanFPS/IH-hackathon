const {Schema, model} = require('mongoose')

const lawyerSchema =  new Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    practice: {
        type: Boolean,
        required: true
    },

    fee: {
        type: Number,
        required: true
    }
    //Stay inside these braces
},
    //Stay above this line
    {
    timeseries: true,
    timestamps: true
    }
);

const Lawyer =  model("Lawyer", lawyerSchema)