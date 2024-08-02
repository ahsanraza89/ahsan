import { NextResponse } from "next/server";

export async function POST(req,res){

    let data = await req.json();
    console.log(data);

    let filePath = path.resolve(__dirname,"../data.dat");
    // console.log(filePath + "File Milgi");
let stringWaliArray = readFileSync(filePath,"utf-8");
let jsArray = JSON.parse(stringWaliArray);
let userMila = jsArray.find((user)=>{
    if(user.email == data.user_email && user.password == data.user_password){
        return true;
    }
})

console.log(userMila);

return NextResponse.json({
    
})

}