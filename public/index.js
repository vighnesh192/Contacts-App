// const { default: axios } = require("axios");

console.log("HERE")
function handleSignupSubmit(e) {
    e.preventDefault()
    console.log("INSIDE")
    const email = document.getElementById("signupEmail").value;
    const secret = document.getElementById("signupSecret").value;
    const password = document.getElementById("signupPassword").value;

    try {
        axios.post('/user/signup', {email, password, secret})
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                axios.get('http://localhost:3001/contact/contacts.html')
            })
            .catch((err) => console.log('SignUp Error:-', err))
    } catch (error) {
        console.log('Signup error:- ', error)
    }
}