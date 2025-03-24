const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
//     await mongoose.connect(MONGO_URL);
   
//     // console.log("Connected to DB"); 
    // await initDB();

}

// const initDB = async () => {
//     try {
//         // console.log("Initializing data...");
        // await Listing.deleteMany({});
//         // console.log("Deleted existing data.");


//         const newData = initData.data.map(obj => ({
//             ...obj,
//             owner: new mongoose.Types.ObjectId("67aa9dd36e6c92b953d7c068")
//         }));

//         // console.log("Inserting new data:", newData);
//         await Listing.insertMany(newData);
//         // console.log("Data was initialized");
//     } catch (error) {
//         console.error("Error initializing data:", error);
//     }
// };

main() .then(() => console.log("Connected to MongoDB successfully!"))
.catch((err) => console.error("MongoDB connection error:", err));