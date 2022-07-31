import { useState } from 'react'

export default function _13_BasicFormValidation() {
    const [user, setUser] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [password, setpassword] = useState("")
    const [passwordErr, setpasswordErr] = useState("")

    function formHandler (e) {

        if(user.length < 3 || password.length < 3)
        {
            alert("Please check the user id & password")
        }
        
        else
        {
            alert("Login Successfully")
        }

        e.preventDefault()
        console.log(e.preventDefault());
    }

    function userHandler (e) {
        let items = e.target.value
        if(items.length < 3)
        {
            setUserErr(true)
        }

        else
        {
            setUserErr(false)
        }
        setUser(items)
        console.log(e.target.value.length);
    }

    function passwordHandler (e) {
        let items = e.target.value
        if(items.length < 3)
        {
            setpasswordErr(true)
        }

        else
        {
            setpasswordErr(false)
        }
        setpassword(items)
        console.log(e.target.value.length);
    }

  return (
    <div>
        <hr/>
        <h2>Basic Form Validation</h2>
        <form onSubmit={formHandler}>
            <input type="text" placeholder='enter the user id' onChange={userHandler} /> {userErr? <span>invalid user id</span>: ""}
            <br /> <br /> 
            <input type="password" placeholder='enter the password' onChange={passwordHandler} /> {passwordErr? <span>invalid password</span>: ""} 
            <br /> <br /> 
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}