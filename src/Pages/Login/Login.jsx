import { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setsignState] = useState("Sign In");
  const [name, setName]=  useState("");
  const [email, setEmail]=  useState("");
  const [password, setPassword]=  useState("");
  const [loding, setLoding]  = useState(false);

  const user_auth = async(event)=>{
    event.preventDefault(); 
    setLoding(true)

    if(signState==="Sign In"){
      await login(email, password);
    } else{
      await signup(name, email, password);
    }
    setLoding(false)
  }

  return (
    loding? <div className="login-spinner">
      <img src={netflix_spinner}/>
    </div>:
    <div className="login">
      <img src={logo} className="logo-login" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form autoComplete="off" onSubmit={user_auth}>
          {signState === "Sign Up" && (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your name"
        />
       )}


          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button  onClick={user_auth}
          type="submit">{signState}</button>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              🤷‍♂️ New to Netflix?
              <span onClick={() => setsignState("Sign Up")}> Sign Up Now!</span>
            </p>
          ) : (
            <p>
              🙂Already have account?
              <span onClick={() => setsignState("Sign In")}> Sign In Now!</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;