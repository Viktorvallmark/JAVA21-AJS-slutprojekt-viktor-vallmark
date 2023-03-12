import React, {useState} from "react";

function Register(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }


    return(
        <div className="register-container">
        <h1 className="register-message">Register here!</h1>

        <form className="register-form" onSubmit={handleSubmit}>
            <label for="username">Username: </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username"></input>
            
            <label for="password">Password: </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password"></input>

            <label for="firstname">First name: </label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstname"></input>

            <label for="lastname">Last name: </label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastname"></input>
            
            <button type="submit">Register</button>
        </form>
        <button className="register-button" onClick={() => props.onFormSwitch('login')}>Got an account already? Log in here!</button>
        </div>
        
    );
};


export default Register;