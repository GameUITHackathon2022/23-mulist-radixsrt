const { MongoDBNamespace } = require('mongodb');
const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },
    
    begin: {
        type: Date,
        validate: {
            validator: function(input) {
              return (new Date(input) >= new Date());
            },
            message: props => `${props.value} is not a valid Date!`
          },
        default: Date.now()
    },
   
    end: {
        type: Date,
        default: Date.now()
    },

    address: {
        type: String,
        required: true
    },

    address2: {
        type: String,
        required: true
    },


    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },


    weight_limit:{
        type: Number,
        required: true
    },
     
    status: {
        type: Boolean,
        default: true
    },

    collected_weight: {
        type: Number,
        default: 0
    }

    
}, {timestamps: true});

module.exports = mongoose.model("Campaign", campaignSchema);