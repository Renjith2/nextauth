import mongoose from "mongoose";
export function connect (){
mongoose.connect(process.env.MONGO_URL!,{
    tls:true,
}).then(()=>console.log("Database connected successfully!!"))
.catch((err)=>
console.log("Hey There is Some error", err)
)
}