import React, { useState, useEffect } from 'react';
import Text2SVGPage from './components/text-2-svg-page/text-2-svg-page';
import AppHeader from './components/app-header/app-header';
import GeneratedMediaSection from './components/generated-media-section/generated-media-section';
import LoginPage from './components/login-page/login-page';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';


function App() {
    let [logo, setLogo] = useState<string>(
        'https://res.cloudinary.com/dxqgoyv5b/image/upload/v1676415362/bashful.ai/images/Branding/Logo/logo_1_hc5die.png'
    );
    return (
        <div className="bg-black min-h-screen w-full flex flex-col">
            {/* <Routes>
                <Route
                    path="/"
                    element={
                        // <RequireAuth loginPath="/login">
                            <>
                                <AppHeader logo_url={logo} />
                                <Text2SVGPage className="flex-grow" />
                            </>
                        // </RequireAuth>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
            </Routes> */}
            <LoginPage/>
            <div className='bg-white'>yolo</div>
            {/* <AppHeader logo_url={logo}/> */}
            {/* <Text2SVGPage className='flex-grow'/> */}
            {/* <LoginPage/> */}
            {/* <GeneratedMediaSection urls={[{url: logo, mediaType: "image"}]}/> */}

        </div>
    );
}

export default App;
