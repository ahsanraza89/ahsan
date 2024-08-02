"use client"

import customer from "@/apis/customer";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default()=>{

 let [custumer, setCustomer] = useState([]);

   useEffect(() =>{

    customer.getCustomers().then((resp) =>{
        console.log(resp.data);
        setCustomer(resp.data);
    })

   }, [])


   function addCustomer(){

    customer.addCustomer({
       customer_b_name: "ahsanraza",
       customer_f_name: "Ahsan",
       customer_b_address : "D-Ground",
       customer_code: '0929812989'
    }). then((resp)=>{
        console.log(resp.data);
        toast.success("customer add ho gya")
    })
   }
return <div>

    <table border={1}>
        <thead>
            <tr>
                <td>
                    customer Name
                </td>
            </tr>
        </thead>

        {
            custumer.map(function(customer){
                return <tr>
                    <td>{customer.customer_b_name}</td>
                    <td>{customer.customer_f_name}</td>
                    <td>{customer.customer_b_address}</td>
                </tr>
            })
        }
    </table>

    <button onClick={addCustomer}>
        Add customer
    </button>
</div>

}

