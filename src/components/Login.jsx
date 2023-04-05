import React, { useState, useEffect } from "react";
import '../Login.css'
const Login = () => {
    // const handleCallbackResponse = (response) => {
    //   console.log('Encoded JWT token' +response.credential);
    // }
    // useEffect(() => {
    //     /* global google */
    //     google.accounts.id.intialize({
    //         client_id: "773559696912-6mojroidgrrj3lprlr5n04lgnapal9rl.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })
    //     google.accounts.id.renderButton(
    //         document.getElementById('signInDiv')
    //     )
    // }, [])
    return (
        <>
            <div className="loginPagebg">
                <div className="LoginBox">
                    <div className="insideBox">
                        {/* <img src='Logo.png' /> */}
                        <h1>Login Page</h1>
                        <div class="imgcontainer">
                            <img src="https://pbs.twimg.com/profile_images/1534044424417619968/zajaXLj8_400x400.jpg" alt="Avatar" class="avatar" />
                        </div>
                        <label for="uname">Username</label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw" className="mt15">Password</label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <div className="signInDiv"></div>
                </div> </div>
        </>
    )
}
export default Login