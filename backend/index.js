const express= require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const AuthRouter=require("./Routes/AuthRouter.js")
const productRouter=require("./Routes/ProductRouter.js")
require("dotenv").config()
require("./Models/db")

const PORT=process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(cors())
app.use("/auth",AuthRouter)
app.use("/products",productRouter)


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);   
})