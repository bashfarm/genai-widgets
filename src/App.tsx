import React, { useState, useEffect } from 'react';
import Text2SVGPage from './components/text-2-svg-page/text-2-svg-page';
import AppHeader from './components/app-header/app-header';
import GeneratedMediaSection from './components/generated-media-section/generated-media-section';


function App() {
    let [logo, setLogo] = useState<string>('https://res.cloudinary.com/dxqgoyv5b/image/upload/v1676415362/bashful.ai/images/Branding/Logo/logo_1_hc5die.png')
    return (
        <div className='bg-black min-h-screen w-full flex flex-col'>
            <AppHeader logo_url={logo}/>
            <Text2SVGPage className='flex-grow'/>
            {/* <GeneratedMediaSection urls={[{url: logo, mediaType: "image"}]}/> */}
        </div>
    );
}


export default App;
