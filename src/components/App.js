import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [username,Setusername]=useState('')
  let [password,Setpassword]=useState('')
  let [error,Seterror]=useState('')
  function check(e){
    e.preventDefault()
    console.log(username,password)
    if(username.length==0 || password.length==0){
      Seterror('Both username and password are required.')
    }
    else{
      Seterror('')
    }
  }
  return (
    <form onSubmit={check}>
      <label for='name'>Username:</label>
      <input type='text' onChange={(e)=>{Setusername(e.target.value)
        Seterror('')}} />
      <label for='name'>Password:</label>
      <input type='password' onChange={(e)=>{Setpassword(e.target.value)
      Seterror('')}} />
      {
      error && <div id='errorMessage'>{error}</div>
      }
      <button type="submit">Login</button>
      </form>
  )
}

export default App