import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useIsAuthenticated, useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
    className?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ className }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn();
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()

    if(isAuthenticated()){
        // Redirect to Dashboard
        navigate('/')
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission here
        var myHeaders = new Headers();
        myHeaders.append('accept', 'application/json');
        myHeaders.append('Content-Type', 'application/json');

        var raw = JSON.stringify({
            identifier: email,
            password: password,
        });

        var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        let authRes = await fetch('http://localhost:1337/api/auth/local', requestOptions)
        let resData = (await authRes.json())
        signIn({
            token: resData.jwt,
            tokenType: 'Bearer',
            expiresIn: 3600,
            authState: resData.user,
        }
        )
    };

    return (
        <div className={`flex h-screen bg-black ${className}`}>
            <div className="w-1/2 flex flex-col items-center justify-center p-4">
                <img
                    src="https://res.cloudinary.com/dxqgoyv5b/image/upload/v1676415362/bashful.ai/images/Branding/Logo/logo_1_hc5die.png"
                    alt="Logo"
                    className="mb-8 h-24 w-24"
                />
                <Typography variant="h4" className="mb-4 text-white">
                    InstructArt
                </Typography>
                <form onSubmit={handleSubmit} className="w-2/3 p-4 bg-white rounded shadow-lg">
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full mb-4"
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full mb-4"
                    />
                    <Button variant="contained" color="primary" type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </div>
            <div className="w-1/2 relative">
                <img
                    src="https://storage.googleapis.com/bashful_api/inkpunk_diffusion/37f02674-f125-11ed-bf36-c1582de3f443.png"
                    alt="Art"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Typography variant="h5" className="text-white text-center">
                        "InstructArt is a new way to create art iteratively via natural language.{' '}
                        <span className="font-bold text-purple-500">Unleash your creativity</span>."
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
