import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from './utils/mutations';
import {Button}  from '@material-ui/core';
import Auth from '../src/utils/auth';

const Signup = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...state },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login">
            <div className="login_logo">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="FB logo"
                />
                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt='facebook'
                />
            </div>
            <form onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  placeholder="Username"
                  name="username"
                  type="username"
                  id="email"
                  value={state.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="email address"
                  name="email"
                  type="email"
                  id="email"
                  value={state.email}
                  onChange={handleChange}
                />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={state.password}
                onChange={handleChange}
              />
              </form>
            
            <Button type="submit">
                Sign In
            </Button>
        </div>
  );
};

export default Signup;
