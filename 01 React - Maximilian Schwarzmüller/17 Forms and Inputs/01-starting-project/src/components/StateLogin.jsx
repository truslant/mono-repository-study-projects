import Input from "./Input";

import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

import { useInput } from "../hooks/useInput";

export default function Login() {

  const {
    value: emailValue,
    handleValueChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => hasMinLength(value))

  const {
    value: passwordValue,
    handleValueChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value))



  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={emailHasError && 'Please enter a valid email!'}
        />
        <Input
          label='Password'
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && 'Password must be at least 6 characters long!'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
