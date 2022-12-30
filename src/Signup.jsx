import React ,{useState} from "react"
export const Signup = (props) =>{
    const[email , setEmail]= useState (" ");
    const[password , setPassword] = useState(""); 
    const[phone ,setPhone] = useState(" ");
    const[name ,setName] = useState(" ");
    const[gender ,setGender] = useState(" ");

    const handleSubmit =(e) => {
        e.preventDefault(); 
  console.log(email);
    }

    return (
        <>
        <div className="container">
   <form className="Signup" onSubmit={handleSubmit}>
    <label className="label" htmlFor="name" >Username</label>
    <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Username"  id="name" name="name" />
    <label className="label" htmlFor="email" >Email:</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="xyz@abc.com"  id="email" name="email" />
    <label className="label" htmlFor="password">Password:</label>
    <input  placeholder="6+ password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"   id="password" name="password" />
    <label className="label" htmlFor="gender" >Gender</label>
    <input value={gender} onChange={(e) => setGender(e.target.value)} type="gender" placeholder="Male"  id="gender" gender="gender" />
    <label className="label" htmlFor="name" >Phone</label>
    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="1234567890"  id="phone" phone="phone" />
   <button className="btn" type="submit ">Log in</button>
   </form>
   <a className="link" onClick={() => props.onFormSwitch('Login')} >Do have an account? Login</a>
   </div>
   </>
)
}