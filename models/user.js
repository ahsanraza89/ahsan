import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    email :String ,
    // user_name : String,
    password: String,
    ads : []
})


export let User = mongoose.models.user || mongoose.model('user', userSchema)
































// class User{
//     user_name
//     user_password
//     city

// }

// let u1 = new User();
// u1.user_name = 'ali';
// u1.user_password = '343';
// u1.city = "FSD";
// u1.save();

// let u2 = new User();
// u2.user_name = "asdasas";
// u2.user_password = "122";
// u2.city = "lhr";
// u2.save();

