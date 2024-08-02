import { createSlice } from "@reduxjs/toolkit"


let authSlice = createSlice({
    name: 'authslice',
        initialState:{
 
            a :{},
            b : {},
            name : 'rameez',
            users : [],
            currentUser :{}
        },
    reducers :{
        // setUser: function(puranaData, nyData){
        // puranaData.currentUser = nyData.payload
        // },
        // addUser: function(puranaData,nyData){
        //       puranaData.users.push(nyData.payload)
        // }

    }
    
    
})
// reducers:{
//     setUser:function(puranaData, nyData){
//         puranaData.currentUser = nyData.payload
//     },
//     addUser:function(puranaData, nyData){
//                                         5
//         puranaData.users.push(nyData.payload)

//     },
//     removeUser:function(puranaData, nyData){

//         puranaData.users.splice(nyData.payload, 1)

//     },
//     updateUser:function(puranaData, nyData){

//         puranaData.users[nyData.payload.index] = nyData.payload.newName;


//     }
// }
// });

export default authSlice;