import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [secret, setsecret] = useState('');

    let navigate = useNavigate();

    const handleSubmitClick = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:3001/user/signup', { email, password, secret })
                .then((res) => {
                    console.log(res.data)
                    alert("SIGN UP SUCCESSFUL!!")
                    navigate('/signin')
                })
                .catch((err) => alert("PLEASE ENTER ALL THE DETAILS."))
        } catch (error) {
            console.log("SIGNUP ERROR:- ", error)
        }
        console.log(email, password, secret);
    }

  return (
    <div className="container center_div min-vh-100">
        <div className="row justify-content-center min-vh-100">
            <div className="col-4 my-auto">
                <div class="card p-4 bg-light">
                    <div class="card-body">
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <div className="form-text text-center mb-3">Already have an account?
                            <Link to="/signin" style={{textDecoration: 'none'}}> Sign In</Link>
                        </div>
                        <form>
                            <div className="mb-3 justify-content-center">
                                <label htmlFor="signupEmail" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="signupEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 justify-content-center">
                                <label htmlFor="signupPassword" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="signupPassword" />
                            </div>
                            <div className="mb-4 justify-content-center">
                                <label htmlFor="signupSecret" className="form-label">Secret</label>
                                <input type="string" value={secret} onChange={(e) => setsecret(e.target.value)} className="form-control" id="signupSecret" />
                            </div>
                            <div className="text-center mb-3">
                                <button type="submit" className="btn btn-dark ml-5 " onClick={handleSubmitClick}>Sign Up</button>
                            </div>
                            <div id="emailHelp" className="form-text">By clicking the Sign Up button, you are creating an account, and you agree to the Terms of Use.</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup