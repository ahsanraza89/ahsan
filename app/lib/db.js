import mongoose, { Mongoose } from "mongoose";

export function dbConnectKaro(){
    // mongoose.connect('mongodb://localhost:27017/glassDb').then(function(connection){

        mongoose.connect('mongodb+srv://ahsanraza12:ahsan21.@ahsanraza12.vmbcoql.mongodb.net/ahsan12').then(function(connection){
   console.log(connection);
   console.log('db connect ho gaye');
    }).catch(function(err){
        console.log(err);

    });
}