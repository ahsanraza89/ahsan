"use client"
import supplier from "@/apis/supplier";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default  () =>{

    let [suppliers, setSuppliers] = useState([])

   useEffect(() =>{
    supplier.getSuppliers().then((resp)=>{
        console.log(resp.data);
        setSuppliers(resp.data)
    })
   }, [])

   function addSupplier(){
    
    supplier.saveSuppier({
        supplier_b_name: 'ahsan',
        supplier_title : 'Developer',
        supplier_mobile : '898792898739'
    }).then((resp)=>{
        console.log(resp.data);
        toast.success("supplier add ho gya")
    })
   }



return <div>
<table border={1}>
    <thead>
        <tr>
            <td>
                Add Supplier Name
            </td>
        </tr>
    </thead>

    {
        suppliers.map(function(suplier){
          return <tr>
            <td>{suplier.supplier_b_name}</td>
            <td>{suplier.supplier_title }</td>
            <td>{suplier.supplier_mobile}</td>
          </tr>
        })
    }
</table>

    <button onClick={addSupplier}> Add suplier</button>
</div>


   
}