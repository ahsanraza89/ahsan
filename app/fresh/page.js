"use client"
import axios from "axios";
// import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...arg)=>{
    return axios.get(...arg).then(resp =>resp.data);
}

export default () =>{
let { data, error, isLoading} =

useSWR('https://fakestoreapi.com/products/1', fetcher);

    return <div>

 { isLoading ? <img style={{height:'200px', position:'absolute', left: "0", right: "0",margin:"auto"}} src="https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg" /> : null}
 
 { error ? <h1> Error Agya</h1> : null}

 { data ? <div> 
    <h1>{data.title}</h1>
    <h1>{data.price}</h1>
 </div> : null}


    </div>
}