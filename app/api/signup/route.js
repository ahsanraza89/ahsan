// // import { NextRequest } from "next/server";

import { User } from "@/models/user";
import { NextResponse } from "next/server";

// import { readFileSync, writeFileSync } from "fs";
// import { NextResponse } from "next/server";
// import path from "path";

// // export function Post(req){
// //     let data = req.body.json();
// //     console.log(data);
// //     return NextRequest.json({
// //         name : "ahsan"
// //     })
// // }



//  export async function POST(req,res){

//     let data = await req.json();
//     console.log(data);

//     let filePath = path.resolve(__dirname,"../data.dat");
//     // console.log(filePath + "File Milgi");
// let stringWaliArray = readFileSync(filePath,"utf-8");
// let jsArray = JSON.parse(stringWaliArray);
// jsArray.push(data);

// let stringWaliArray2 = JSON.stringify(jsArray);
// writeFileSync(filePath,stringWaliArray2);

//     return NextResponse.json({});

//  }

export async function DELETE(req){
 
  console.log(req.nextUrl.searchParams.get("d"));

  await User.findByIdAndDelete(id)

  return NextResponse.json({success: true})

}

export async function POST(req){
// incoming data pakarna 

   let data =  await req.json();
   console.log(data);

  let nyaUser = new User(data)
  await nyaUser.save();
  console.log('code chal gya');

//   request ka answer back krna 

return NextResponse.json({
    success: true
});

}

export async function GET(req){
  let meraUser = await User.find();

  return NextResponse.json({
    users: meraUser

  })

}

// jb request chlte to lazmi jason sy guzarne 