import { webUrl } from "@/config";
import axios from "axios";

export default {
    addCustomer:(args)=>{

        return axios.post(webUrl+'/api/customer/addCustomer', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCustomers:(args)=>{

       return axios.post(webUrl+'/api/customer/getCustomers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCustomer:(args)=>{

       return axios.post(webUrl+ '/api/customer/deleteCustomer', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

}