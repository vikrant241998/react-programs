import "./App.css";

// import { Button, Navbar, Table } from "react-bootstrap";
// import React, { useState } from 'react'
// import _01_FunctionComp from "./Components/_01_FunctionComp";
// import _02_ClassComp from "./Components/_02_ClassComp";
// import _03_JSX_Comp from "./Components/_03_JSX_Comp";
// import _04_EventComp from "./Components/_04_EventComp";
// import _05_StateHook from "./Components/_05_StateHook";
// import _06_StateHookClass from "./Components/_06_StateHookClass";
// import _07_PropsFunc from "./Components/_07_PropsFunc";
// import _08_PropsClass from "./Components/_08_PropsClass";
// import _09_InputBox from "./Components/_09_InputBox";
import _10_HideShowEle from "./Components/_10_HideShowEle";
// import _11_FormHandle from "./Components/_11_FormHandle";
// import _12_if_else from "./Components/_12_if_else";
// import _13_BasicFormValidation from "./Components/_13_BasicFormValidation";
// import _14_Function_as_Props from "./Components/_14_Function_as_Props";
// import _15_1st_Constructor_Life from "./Components/_15_1st_Constructor_Life";
// import _16_RenderLlife from "./Components/_16_RenderLlife";
// import _17_ComponentDidMount_Life from "./Components/_17_ComponentDidMount_Life";
// import _18_ComponentDidUpdate_Life from "./Components/_18_ComponentDidUpdate_Life";
// import _19_shouldComponentUpdateLife from "./Components/_19_shouldComponentUpdateLife";
// import _20_ComponentWillUnmount from "./Components/_20_ComponentWillUnmount";
// import _21_Hooks_in_React from "./Components/_21_Hooks_in_React";
// import _22_UseEffect from "./Components/_22_UseEffect";
// import _23_UseEffect_With_State from "./Components/_23_UseEffect_With_State";
// import _24_UseEffect_With_Props from "./Components/_24_UseEffect_With_Props";
// import _25_Array_Listing_With_Map_function from "./Components/_25_Array_Listing_With_Map_function";
// import _26_List_With_bootstrap_Table from "./Components/_26_List_With_bootstrap_Table";
// import _27_Nested_Table_List from "./Components/_27_Nested_Table_List";
// import _28_Previous_State_in_Function from "./Components/_28_Previous_State_in_Function";
// import _29_Previous_Props_Hooks from "./Components/_29_Previous_Props_Hooks";
// import _30_State_WIth_Object from "./Components/_30_State_WIth_Object";

// import Api_Get_Method from "./API_React_JS/Api_Get_Method";
// import Api_Post_Method from "./API_React_JS/Api_Post_Method";
// import Api_Delete_Method from "./API_React_JS/Api_Delete_Method";
// import Api_Put_Method from "./API_React_JS/Api_Put_Method";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Getting_Started_React_Router/Home";
import About from "./Getting_Started_React_Router/About";
import Services from "./Getting_Started_React_Router/Services";
import Contact from "./Getting_Started_React_Router/Contact";
import Link_Navbar from "./Getting_Started_React_Router/Link_Navbar";
import Page_404_Not_found from "./Getting_Started_React_Router/Page_404_Not_found";
import User from "./Getting_Started_React_Router/User";



function App() {

  // _14_Function_as_Props
  function getData() {
    alert("This function pass as a props called by click button")
  }

  // <_24_UseEffect_With_Props/>
  // const [data, setData] = useState(10)
  // const [count, setCount] = useState(100)
  
  // <_29_Previous_Props_Hooks />
  // const [Pdata, setPData] = useState(1)
  
  return (
    <div className="App">
      {/* <_01_FunctionComp /> */}
      {/* <_02_ClassComp /> */}
      {/* <_03_JSX_Comp /> */}
      {/* <_04_EventComp /> */}
      {/* <_05_StateHook /> */}
      {/* <_06_StateHookClass /> */}
      {/* <_07_PropsFunc Details={{name: "Vikrant Mulankar", age: 22, address: "New Delhi", email_id: "vikrant@gmail.com"}}/> */}
      {/* <_07_PropsFunc Details={{name:"Rahul Sharma", age:24, address:"Old Delhi", email_id:"rahul@gmail.com"}}  /> */}
      {/* <_08_PropsClass student={{name: "Vikrant Mulankar", roll_no: 12345, contact: 9685741236}}/> */}
      {/* <_09_InputBox /> */}
      <_10_HideShowEle />
      {/* <_11_FormHandle /> */}
      {/* <_12_if_else /> */}
      {/* <_13_BasicFormValidation /> */}
      {/* <_14_Function_as_Props  data={getData}/> */}
      {/* <_15_1st_Constructor_Life /> */}
      {/* <_16_RenderLlife /> */}
      {/* <_17_ComponentDidMount_Life /> */}
      {/* <_18_ComponentDidUpdate_Life />   */}
      {/* <_19_shouldComponentUpdateLife /> */}
      {/* <_20_ComponentWillUnmount /> */}
      {/* <_21_Hooks_in_React /> */}
      {/* <_22_UseEffect /> */}
      {/* <_23_UseEffect_With_State /> */}

      {/* <_24_UseEffect_With_Props data={data} count={count}/>
      <button onClick={()=> setData(data+1)}>Update Data</button>
      <button onClick={()=> setCount(count+1)}>Update Count</button> */}

      {/* <Button onClick={()=> alert("Hello")}>Click Me</Button> */}

      {/* <_25_Array_Listing_With_Map_function /> */}
      {/* <_26_List_With_bootstrap_Table /> */}
      {/* <_27_Nested_Table_List /> */}
    
    
    {/* ==========React Router Start From Here=========*/}
      


    {/* <BrowserRouter>
    <Link_Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/*" element={<Page_404_Not_found />} />          
      </Routes>
    </BrowserRouter> */}



    {/*=========API in React JS==========*/}
    {/* <Api_Get_Method /> */}
    {/* <Api_Post_Method /> */}
      {/* <Api_Delete_Method /> */}
      {/* <Api_Put_Method /> */}

      {/* <_28_Previous_State_in_Function /> */}

      {/* <_29_Previous_Props_Hooks  Pdata={Pdata}/>
      <button onClick={()=>setPData(Math.floor(Math.random()*10))}>Click me and update Props</button> */}
    
    {/* <_30_State_WIth_Object /> */}
    </div>
  );
}
export default App;
