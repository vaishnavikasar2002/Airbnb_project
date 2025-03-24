const mongoose = require("mongoose");
// const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },

    description: String,

    image: {
       url:String,
       filename:String,
     }, 
     
     
    price: Number,
    location: String,
    country: String,
    reviews : [
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },

    geometry : {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
      
    }
    
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;