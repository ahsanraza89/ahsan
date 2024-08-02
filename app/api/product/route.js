import product from "@/apis/product";
import { NextResponse } from "next/server";



export async function GET(req){
    let userKiId = req.nextUrl.searchParams.get("user")

    let products;

    if(userKiId){
        products = await product.find({owner:userKiId});
    } else{
        products = await product.find()
    }

    return NextResponse.json(products);
}