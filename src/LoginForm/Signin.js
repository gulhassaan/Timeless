import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneIcon from '@mui/icons-material/Phone';
import timeless from '../assets/timless.png'
import InputLabel from '@mui/material/InputLabel';


export default function SignIn() {
    const jaldiFontStyle = {
        fontFamily: 'Jaldi, sans-serif',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    };

    const inputFieldStyle = {
        width:"100px", 
        marginBottom: '20px',
        padding: '10px', 
        borderRadius: '50px', 
        width: '100%',
        boxSizing: 'border-box', 
        color: 'gray',
        backgroundColor: '#0D121D',
        border: 'none', 
        padding: 16,
        fontSize: 16,
        '&::placeholder': {
            color: 'gray',
        },
    };

    const forgetPasswordButtonStyle = {
        ...jaldiFontStyle,
        color: '#8F56ED',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    };

    const signInButtonStyle = {
        ...jaldiFontStyle,
        borderRadius: '20px',
        backgroundColor: '#8F56ED',
        color: 'white',
    };

    const socialPlatformTextStyle = {
        ...jaldiFontStyle,
        color: 'gray',
        marginBottom: '10px',
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px',
        
    };

    const iconStyle = {
        fontSize: 35,
        color: 'white', 
        cursor: 'pointer',
        margin: '0 10px', 
        border: '5px solid #0D121D', 
        borderRadius: '10px', 
        padding: '5px',
       
    };

    const createAccountTextStyle = {
        ...jaldiFontStyle,
        color: '#8F56ED',
    };

    return (
        <Container component="div" maxWidth="xs" style={containerStyle}>
            <div>
            <div style={{ display: 'flex', alignItems: 'center', margin:"20px" }}>
                <img style={{ width: 80, height: 80 }} src={timeless} alt="Timeless Logo" />
                <Typography variant="h4" sx={{ color: 'white', marginLeft: 2 }}>
                    Timeless
                </Typography>
            </div>
                <Typography variant="h5" style={{ ...jaldiFontStyle, marginBottom: '10px' }}>
                    <span>Welcome Back!</span>
                </Typography>
                <Typography variant="body1" style={{ ...jaldiFontStyle, marginBottom: '20px',color: 'gray' }}>
                    Use the form below to access your account.
                </Typography>

                <InputLabel htmlFor="email" style={{ color: 'gray', fontSize:"14px"}}>
                    Email Address
                </InputLabel>
                <input
                    required
                    type="text"
                    placeholder="Enter Email Adress here ..."
                    style={inputFieldStyle}
                />

                <InputLabel htmlFor="password" style={{ color: 'gray', fontSize:"14px"}}>
                    Password
                </InputLabel>
                <input
                    required
                    type="password"
                    placeholder="Enter Password here ..."
                    style={inputFieldStyle}
                    sx={{width:'100%'}}
                />


                <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                    <Grid item xs={6}>
                        {/* "Forget Password?" */}
                        <Button fullWidth variant="text" style={forgetPasswordButtonStyle}>
                            Forget Password?
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        {/* "SignIn" Button */}
                        <Button fullWidth variant="contained" color="primary" style={signInButtonStyle}>
                            <Typography style={jaldiFontStyle}>SignIn</Typography>
                        </Button>
                    </Grid>
                </Grid>

                {/* Social Platform Text */}
                <Typography variant="body1" style={socialPlatformTextStyle}>
                    Use a social platform to continue.
                </Typography>

                {/* Social Platform Icons */}
                <div style={iconContainerStyle}>
                    <GoogleIcon style={iconStyle} />
                    <AppleIcon style={iconStyle} />
                    <PhoneIcon style={iconStyle} />
                </div>

                {/* Additional Text */}
                <Typography variant="body1" style={createAccountTextStyle}>
                    Don't have an account? <span style={{ color: 'gray' }}>Create Account</span>
                </Typography>
            </div>
        </Container>
    );
}
