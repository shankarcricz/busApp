import React from "react";
import '../Login.css'
const Signup = () => {
    return (
        <>
            <div className="loginPagebg">
                <div className="LoginBox">
                    <div className="insideBox">
                        <h1>SignUp Page</h1>
                        <div class="imgcontainer">
                            <img src="https://pbs.twimg.com/profile_images/1534044424417619968/zajaXLj8_400x400.jpg" alt="Avatar" class="avatar" />
                        </div>
                        <label for="uname">User Name</label>
                        <input type="text" placeholder="Enter User Name" name="usname" required />
                        <label for="uname">First Name</label>
                        <input type="text" placeholder="Enter First Name" name="uname" required />
                        <label for="uname">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="lname" required />
                        <div className="radiobutton">
                            <p>Please select your Gender:</p>
                            <input type="radio" id="gen1" name="radAnswer" />
                            <label for="age1">Male</label><br />
                            <input type="radio" id="gen2" name="radAnswer" />
                            <label for="age2">Female</label><br />
                            <input type="radio" id="gen3" name="radAnswer" />
                            <label for="age3">Dont prefer</label><br /><br />
                        </div>
                        <label for="psw" className="mt15">Email</label>
                        <input type="email" placeholder="Enter Email" name="ema" required />
                        <label for="psw" className="mt15">Phone Number</label>
                        <input type="number" placeholder="Enter Phone Number" name="num" required />
                        <label for="psw" className="mt15">Password</label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                </div> </div>
        </>
    )
}
export default Signup