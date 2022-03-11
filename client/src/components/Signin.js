import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Signin() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
      console.log("EMAIL:- ", email);
    }, [email])

    const handleSubmitClick = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:8080/user/signin', {email, password})
                .then((res) => {
                    console.log("SIGNIN:- ", res.data);
                    localStorage.setItem('token', res.data.token)
                    navigate('/contacts')
                })
        } catch (error) {
            console.log("SIGNIN ERROR:- ", error)
        }
        console.log(email, password);
    }
    

  return (
    <div className="container center_div min-vh-100">
        <div className="row justify-content-center min-vh-100">
            <div className="col-6 my-auto">
                <h2 className="text-center mb-4">SignIn</h2>
                <div className="form-text text-center mb-3">Don't have an account?  
                    {/* <span style={{"color": 'blue', cursor: 'pointer'}} onClick={() => navigate("signup")}>SignIn</span>  */}
                    <Link to="/signup"> SignUp</Link>
                </div>
                <form>
                    <div className="mb-3 justify-content-center">
                        <label htmlFor="signinEmail" className="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="signinEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 justify-content-center">
                        <label htmlFor="signinPassword" className="form-label">Password</label>
                        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="signinPassword" />
                    </div>
                    <div className="text-center mb-3">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signin