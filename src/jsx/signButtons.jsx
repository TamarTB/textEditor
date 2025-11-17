import React, { useState, useEffect } from "react";
import '../style/sign.css';

function SignButtons({ isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword, currentUser, setCurrentUser, setDisplays ,setCurrentDisplay, setFileList}) {
    function handleLogin() {
        if (!username || !password) return alert("Enter username and password");

        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (!users[username]) {
            return alert("User does not exist. Please sign up first.");
        }

        if (users[username].password !== password) {
            return alert("Incorrect password!");
        }

        setCurrentUser(username);
        setIsLoggedIn(true);
    }

    function handleSignUp() {
        if (!username || !password) return alert("Enter username and password");

        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[username]) {
            return alert("Username already exists. Please choose a different name.");
        }

        //שמירת המשתמש ברשימת המשתמשים
        users[username] = { password };

        localStorage.setItem("users", JSON.stringify(users));

        setCurrentUser(username);
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setCurrentUser('');
        setFileList([]);
        setDisplays([]);
        setUsername('');
        setPassword('');
        setCurrentDisplay(undefined);
    }

    return (
        <div className="user-panel">
            {!isLoggedIn && (
                <>
                    <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignUp}>Sign Up</button>
                </>
            )}
            {isLoggedIn && (
                <div>
                    <p>Welcome, {currentUser}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default SignButtons;