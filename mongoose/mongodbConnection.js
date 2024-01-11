import mongoose from "mongoose"


const mongodbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connection successfully !");
        
    } catch (error) {
        console.error("mongodb connection failed.",error)
    }
 
}

export default mongodbConnection
