// import React, {useState} from 'react'

// export default function _28_Previous_State_in_Function() {
//   const [data, setData] = useState(1)
//   function updateHandler () {

//     // ======= Step One ========
//     //   let rand = Math.floor(Math.random()*10)
//     // setData((pre)=>{
//     //     console.warn(pre)
//     //   if(pre-rand<5)
//     //   {
//     //       alert("Topup")
//     //   }
//     //     return rand
//     // })




//         // ======= Step Two ========
//     for(let i=0; i<5; i++)
//     {
//         setData((pre)=> pre+1)        
//     }
//   }
//     return (
//     <div>
//         <h4>This is a Previous State in Function</h4>
//         <h2>{data}</h2>
        
//         <button onClick={updateHandler}>Click Me and Update State</button>
//     </div>
//   )
// }
