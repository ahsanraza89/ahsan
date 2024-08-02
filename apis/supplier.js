import axios from "axios"
import { webUrl } from "@/config";

export default {
    createBulk:(args)=>{

        return axios.post(webUrl +'/api/supplier/createBulk', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    getPayments:(args)=>{

        return axios.post(webUrl +'/api/supplier/getPayments', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    deletePayment:(args)=>{

        return axios.post(webUrl +'/api/supplier/deletePayment', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    makePayment:(args)=>{

        return axios.post(webUrl +'/api/supplier/makePayment', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    getOutStandingBills:(args)=>{

        return axios.post(webUrl +'/api/supplier/getOutStandingBills', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getBills:(args)=>{

        return axios.post(webUrl +'/api/supplier/getBills', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     deleteBill:(args)=>{

        return axios.post(webUrl +'/api/supplier/deleteBill', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    addBill:(args)=>{

        return axios.post(webUrl +'/api/supplier/addBill', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    saveSuppier:(args)=>{

       return axios.post(webUrl +'/api/supplier/saveSuppier', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    getSuppliers:(args)=>{

       return axios.post(webUrl +'/api/supplier/getSuppliers', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

    deleteSuppier:(args)=>{

        return axios.post(webUrl +'/api/supplier/deleteSuppier', {  
             ...args,
             token:localStorage.getItem('token')
         });
         
     },





}