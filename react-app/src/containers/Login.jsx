import Box from '@mui/material/Box';
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Login = () => {
    const [form, setValues] = useState({
        user: ''
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root, .MuiButton-root': { m: 1, width: '25ch', display: 'flex'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="inputUser"
                    name="user"
                    label="Usuario"
                    onChange={handleInput}
                />
                <TextField
                    id="inputPassw"
                    name="passw"
                    label="Password"
                    type="password"
                    onChange={handleInput}
                />
                <Button variant="contained"onClick={handleSubmit}>
                    <Link style={{
                       textDecoration: 'none',
                       color: 'white'
                    }} to='/menu/dashboard'>
                        LOGIN
                    </Link>
                </Button>
            </div>
      </Box>
    )
}

export default Login