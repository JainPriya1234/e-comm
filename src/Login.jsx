import React ,{useState} from "react"
export const Login = (props) =>{
    const[email , setEmail]= useState (" ");
    const[password , setPassword] = useState(""); 

    const handleSubmit =(e) => {
        e.preventDefault(); 
  console.log(email);
    }

    return (
        <>
        <div className="container">
   <form className="Login" onSubmit={handleSubmit}>
    <label className="label" htmlFor="email" >Email:</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="xyz@abc.com"  id="email" name="email" />
    <label className="label" htmlFor="password">Password:</label>
    <input  placeholder="6+ password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"   id="password" name="password" />
   <button className="btn" type="submit ">Log in</button>
   
   
   </form>
   <a className="link" onClick={() => props.onFormSwitch('Signup')} >Don't have an account? Create an account here</a>
   </div>
   </>
)
}