import React, {useState} from "react";


function Home(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return(
        <div className="login-container">
            <h2 className="welcome-message">
                Welcome to the shop!
            </h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label for="username">Username: </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="Username..." />
                
                <label for="password">Password: </label>
                <input value ={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..." />
                
                <button type="submit">Log in</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        
        </div>
    );
}

export default Home;