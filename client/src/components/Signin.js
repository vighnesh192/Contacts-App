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
            axios.post('http://localhost:3001/user/signin', {email, password})
                .then((res) => {
                    console.log("SIGNIN:- ", res.data);
                    alert("SIGN IN SUCCESSFUL!!")
                    localStorage.setItem('token', res.data.token)
                    navigate('/contacts')
                })
                .catch((err) => {
                    alert('PLEASE ENTER CORRECT EMAIL AND PASSWORD')
                })
        } catch (error) {
            console.log("SIGNIN ERROR:- ", error)
        }
        console.log(email, password);
    }
    

  return (
    <div className="container center_div min-vh-100">
        <div className="row justify-content-center min-vh-100">
            <div className="col-4 my-auto">
                <div class="card p-4 bg-light">
                    <div class="card-body">
                        <h2 className="text-center mb-3">SignIn</h2>
                        <div className="form-text text-center mb-4">Don't have an account?  
                            <Link to="/signup" style={{textDecoration: 'none'}}> SignUp</Link>
                        </div>
                        <form>
                            <div className="mb-3 justify-content-center">
                                <label htmlFor="signinEmail" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="signinEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-4 justify-content-center">
                                <label htmlFor="signinPassword" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="signinPassword" />
                            </div>
                            <div className="text-center mb-2">
                                <button type="submit" className="btn btn-dark" onClick={handleSubmitClick}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin