import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations'

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleChange = ({ target: { name, value } }) => {
    switch (name) {
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
    }
}

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');    
    };

    return (
       <div>
      <h1>Login form</h1>

      <form
        // className={}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>
          <span >Mail</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">
          log in
        </button>
      </form>
    </div>
  );
};
    
export default LoginPage;



