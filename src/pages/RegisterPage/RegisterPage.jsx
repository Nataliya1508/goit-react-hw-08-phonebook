import { register } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };
 const handleSubmit = event => {
        event.preventDefault();
     dispatch(register({ name, email, password }));
        setName('')
        setEmail('');
        setPassword('');    
    };

    return (
       <div>
      <h1>Registration form</h1>

      <form
        // className={}
        autoComplete="off"
        onSubmit={handleSubmit}
            >
                 <label>
          <span >Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
                </label>
                
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
          Register
        </button>
      </form>
    </div>
  );
};


export default RegisterPage;