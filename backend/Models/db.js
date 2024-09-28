const mongoose=require("mongoose")
const mongo_url=process.env.MONGO_CONNECTION;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("mongoDb connected");
        
    }).catch((err)=>{
        console.log("mongoDb connection error",err)
    })