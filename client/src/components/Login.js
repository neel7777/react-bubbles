import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Main = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width; 100%;
margin-left: 800px;
`


const Login = props => {
  const [user, setUser] = useState({
      username: '',
      password: ''
  })

  const handleChanges = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
  }

  const signIn = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', user)
    .then(res=>{
        console.log(res);
        window.localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
    })
    .catch(err=>{
        console.log(err);
    })
}
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <><Main>
       <h1>Welcome to the Bubble App!</h1>
      
      <h1>Login Page</h1>
      
     
            
            <form onSubmit={signIn}>               
                <br>
                </br>
            <input type="text"                
                name="username"  
                placeholder="username" 
                value={user.username}
                onChange={handleChanges}              
                
            />
            <br>
            </br>
            
            
            <input type="text"                
                name="password"               
                placeholder="password"
                value={user.password}
                onChange={handleChanges}     
                
            />
            <br>
            </br>
            <button>Login!</button>
            </form>
        </Main>
    </>
  );
};

export default Login;
