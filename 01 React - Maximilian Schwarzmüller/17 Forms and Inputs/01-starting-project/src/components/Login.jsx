import { useState, useRef } from "react";

export default function Login() {

  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  const refToEmailInput = useRef()
  const refToPasswordInput = useRef()



  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = refToEmailInput.current.value;
    const enteredPassword = refToPasswordInput.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true)
      return;
    }

    setEmailIsInvalid(false)

    console.log('Simulating sending HTTP request...')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={refToEmailInput}
          // value={enteredCredentials.email}
          // onChange={handleCredentialsChange}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={refToPasswordInput}
          // value={enteredCredentials.password}
          // onChange={handleCredentialsChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
