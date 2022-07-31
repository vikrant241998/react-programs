import React, {useEffect, useRef} from 'react'

export default function _29_Previous_Props_Hooks(props) {
    const lastValue = useRef();
    useEffect(()=>{
        lastValue.current = props.Pdata;

        const previousProps = lastValue.current;
    })
  return (
    <div>
        <h3>This is a Previous Props Hooks</h3>
        <h4>Current Values : {props.Pdata}</h4>
        <h4>Previous Values : {lastValue.current}</h4>
        <h4>Diffrence Values : {props.Pdata-lastValue.current}</h4>
    </div>
  )
}
