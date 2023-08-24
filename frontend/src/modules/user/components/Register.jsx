import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import apiClient from '../../../shared/services/api-client';

const Register = () => {
    const [message, setMessage] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const pwdRef = useRef();
    const phoneRef = useRef();
    const doRegister = async () => {
        const userInfo = {
            'name': nameRef.current.value,
            'email': emailRef.current.value,
            'password': pwdRef.current.value,
            'phone': phoneRef.current.value,
        }
        try{
            const response = await apiClient.post(process.env.REACT_APP_REGISTER_URL,userInfo);
            setMessage(response.data.message);
            console.log("Response is ", response);
            console.log("UserInfo ", userInfo);
        }
        catch(err){
            setMessage("Error in Registration")
        }
    }
    return (<>
        <Box>
            <p>{message}</p>
            <TextField inputRef={nameRef} id="outlined-basic" label="Name" variant="outlined" />
            <TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
            <TextField inputRef={pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
            <TextField inputRef={phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
            <Button onClick={doRegister} variant='contained'>Register</Button>
        </Box>
    </>
    )
}

export default Register