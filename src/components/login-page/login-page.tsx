import React, { useState } from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFirebaseApp, useSigninCheck } from 'reactfire';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface LoginPageProps {
    className?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ className }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondaryPassword, setSecondaryPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate = useNavigate();
    const app = useFirebaseApp();
    const auth = getAuth(app);
    const { status, data: signInCheckResult } = useSigninCheck();

    if (signInCheckResult.signedIn === true) {
        navigate('/');
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSecondaryPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondaryPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            let user = (await signInWithEmailAndPassword(auth, email, password)) as any;
            console.log('Login success:', user);
            navigate('/'); // Redirect to the dashboard after successful login
        } catch (error: any) {
            console.error('Login error:', error);
        }
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();

        if (password === secondaryPassword) {
            try {
                const createdUser = await createUserWithEmailAndPassword(auth, email, password);
                console.log('User created:', createdUser);
                navigate('/'); // Redirect to the dashboard after user creation
            } catch (createError) {
                console.error('User creation error:', createError);
            }
        } else {
            console.error('Passwords do not match');
        }
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
                <form
                    onSubmit={isSigningUp ? handleSignUp : handleSubmit}
                    className="w-2/3 p-4 bg-white rounded shadow-lg"
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full"
                        InputProps={{
                            className: 'bg-white m-2',
                        }}
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full"
                        InputProps={{
                            className: 'bg-white m-2',
                        }}
                    />

                    {isSigningUp && (
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            value={secondaryPassword}
                            onChange={handleSecondaryPasswordChange}
                            className="w-full"
                            InputProps={{
                                className: 'bg-white m-2',
                            }}
                        />
                    )}
                    <Button variant="contained" color="primary" type="submit" className="w-full">
                        {isSigningUp ? 'Sign Up' : 'Login'}
                    </Button>
                </form>
                <div className="flex mt-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="mr-5 text-white">
                        Forgot Password
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        href="#"
                        className="text-white ml-3"
                        onClick={() => setIsSigningUp(!isSigningUp)}
                    >
                        {isSigningUp ? 'Sign In' : 'Sign Up'}
                    </a>
                </div>
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
