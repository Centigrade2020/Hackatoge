import { useState } from "react";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import "./Auth.css";

function Auth() {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [passwd, setPasswd] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  // const credentialResponse = {
  //   client_id:
  //     "983222062492-hg2nks96hdo66l7roqsgtltglblv0138.apps.googleusercontent.com",
  //   credential: "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",
  //   select_by: "btn",
  //   // redirect_uris: ["http://localhost:3000/auth/google/callback"],
  // };

  const handleRegister = () => {
    const content = {
      fname,
      lname,
      email,
      passwd,
    };

    fetch("http://localhost:8000/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleLogin = () => {
    const content = {
      email,
      passwd,
    };

    fetch("http://localhost:8000/login_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  // client_id=304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com

  return (
    <GoogleOAuthProvider clientId="983222062492-hg2nks96hdo66l7roqsgtltglblv0138.apps.googleusercontent.com">
      <div className="Auth">
        {newUser ? (
          <>
            <form>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              ></input>
              <input
                placeholder="First Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                name="fname"
              ></input>
              <input
                placeholder="Last Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                name="lname"
              ></input>
              <input
                placeholder="Password"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
                name="password"
              ></input>
              <input
                placeholder="Confirm password"
                value={cnfPass}
                onChange={(e) => setCnfPass(e.target.value)}
                name="cpassword"
              ></input>
            </form>
            <button
              onClick={() => {
                handleRegister();
              }}
            >
              Login
            </button>

            <p>
              Already signed up?{" "}
              <a
                onClick={() => {
                  setNewUser(false);
                }}
              >
                Sign Up
              </a>
            </p>
          </>
        ) : (
          <>
            <form>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              ></input>
              <input
                placeholder="Password"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
                name="password"
              ></input>
            </form>
            <button onClick={handleLogin}>Log in</button>

            <p>
              Not signed up?{" "}
              <a
                onClick={() => {
                  setNewUser(true);
                }}
              >
                Signup
              </a>
            </p>
          </>
        )}

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Auth;
