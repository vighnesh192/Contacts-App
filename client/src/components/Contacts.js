import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Contacts() {
    const [name, setname] = useState('');
    const [number, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [contacts, setcontacts] = useState([])

    let navigate = useNavigate();

    const handleSubmitClick = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:8080/contact', { name, number, email }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                .then((res) => {
                    console.log("Contact Posted", res.data)
                    setcontacts([...contacts, res.data]);
                })
        } catch (error) {
            console.log("SIGNUP ERROR:- ", error)
        }
        console.log(name, number, email);
    }

    function getContacts() {
        axios.get('http://localhost:8080/contact', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => {
                console.log("Contacts from server", res.data)
                setcontacts(res.data);
            })
            .catch(err => console.log("GET Contacts Error:- ", err));
    }

    useEffect(() => {
        getContacts();
    }, [])
    
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

  return (
    <div className="container center_div min-vh-100">
        <div className="row justify-content-center min-vh-100">
            <div className="col-5 mt-5">
                    <h2 className="text-center mb-4">Add Contact</h2>
                    <form>
                        <div className="mb-3 justify-content-center">
                            <label htmlFor="contactName" className="form-label">Name</label>
                            <input type="string" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="contactName" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 justify-content-center">
                            <label htmlFor="contactNumber" className="form-label">Ph No</label>
                            <input type="number" value={number} onChange={(e) => setpassword(e.target.value)} className="form-control" id="contactNumber" />
                        </div>
                        <div className="mb-3 justify-content-center">
                            <label htmlFor="contactEmail" className="form-label">Email</label>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="contactEmail" />
                        </div>
                        <div className="text-center mb-3">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
                        </div>
                    </form>
                </div>
            <div />
            <div className="row justify-content-center min-vh-100">
                <div className="col-8 mt-5">
                    <h2 className="text-center mb-4">My Contacts</h2>
                    <table className="table table-striped table-hover table-bordered">
                        <thead className='table-dark'>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Ph No</th>
                            <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, i) => {
                                    return [
                                        <tr key={i}>
                                            <td>{contact.name ? contact.name : ''}</td>
                                            <td>{contact.number ? contact.number : ''}</td>
                                            <td>{contact.email ? contact.email : ''}</td>
                                        </tr>
                                    ]
                                })
                            }
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts