const URL = "mongodb+srv://Ujjwal:Ujjwal0312@cluster0.eumrlk1.mongodb.net/userdb?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise = mongoose.connect(URL);
promise.then(data =>{
    console.log("DB Connected...");
}).catch(err =>{
    console.log("Not connected ",err);
})
export default mongoose;