import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import apiClient from '../../../shared/services/api-client';

const Login = () => {
  const [message1, setMessage1] = useState('');
  const emailRef = useRef();
  const pwdRef = useRef();
  const doLogin = async () => {
    const userInfo = {
        'email': emailRef.current.value,
        'password': pwdRef.current.value
    }
    try{
        const response = await apiClient.post(process.env.REACT_APP_LOGIN_URL,userInfo);
        setMessage1(response.data.message);
        console.log("Response is ", response);
        console.log("UserInfo ", userInfo);
    }
    catch(err){
        setMessage1("Error in Login!")
    }
}
  return (<>
    <Box>
            <p>{message1}</p>
            <TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
            <TextField inputRef={pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
            <Button onClick={doLogin} variant='outlined'>Login</Button>
        </Box>
    </>
  )
}

export default Login