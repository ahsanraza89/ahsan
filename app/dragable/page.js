"use client"

import { useEffect, useState } from "react"
import $ from "jquery";
 
// import 'jquery-ui/ui/widgets/draggable'

// import 'jquery-ui/ui/widgets/droppable'

 let Karimkhan=()=>{

    let [boxes,setBoxes] = useState([{color :'red'},{color : 'blue'}]);

    useEffect(function(){
        console.log('yeh 1st wala ha');
    }, [])

    useEffect(function(){
        console.log('ye 2nd wala ha');

        // setBoxes(); 

        // $('.box').draggable()
          // yahan [] m mention ki hui states ko set krne ka function
    // kabhi useEffect kay andr nahi krna chahiye
    }, [boxes])

    
    return  <div>{
        boxes.map(function(box){
          return <div style={{backgroundColor : box.color, width : '200px', height:'200px'}} className="box"></div>
        })
    }

    <button onClick={()=>{
        let color = prompt('color btao')

        let obj = {
            color
        }
        
        boxes.push(obj);
        setBoxes([...boxes]);
    }}>  Change
    </button>
    </div>
}


export default Karimkhan;