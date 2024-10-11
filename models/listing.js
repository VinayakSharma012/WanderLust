const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        set: (v) => 
            v === ""
            ? "https://unsplash.com/photos/people-walking-on-seashore-during-daytime-5GALUr4jAq"
            : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

//post middleware
listingSchema.post("findOneAndDelete", async(listing) => {
    if (listing) {
    await Review.deleteMany({_id: {$in: listing.reviews}});
    }   
});



const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;