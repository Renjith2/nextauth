import mongoose,{Schema} from 'mongoose'
import { type } from 'os'

const userSchema = new Schema({
    name:{
        required:[
            true,
            "Name field is required"
        ],
        type:Schema.Types.String
    },
    email:{
        required:[
            true,
            "Name field is required"
        ],
        type:Schema.Types.String,
        unique:true,
        trim:true
    },
    password:{
        required:[
            true,
            "Name field is required"
        ],
        type:Schema.Types.String
    },
})

export const User = mongoose.models.User || mongoose.model("User", userSchema)