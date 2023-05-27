import React, { useEffect } from 'react';
import GlowLoaderButton from '../glow-loader-button/glow-loader-button';
import GetAppIcon from '@mui/icons-material/GetApp';
import { Player } from '@lottiefiles/react-lottie-player';
import { MediaMeta } from '../generated-media-section/generated-media-section';

interface MediaDownloadProps {
    mediaMeta: MediaMeta;
    className?: string;
    isBeingCreated: boolean;
}

const MediaDownload: React.FC<MediaDownloadProps> = ({ mediaMeta, className }) => {
    const handleDownload = async (url: string) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = url.split('/').pop() || 'file';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    console.log('mediaMeta.isBeingCreated:', mediaMeta);

    async function getImgTagData(mediaUrl: string) {
        if (mediaUrl.endsWith('.svg')) {
            let svgResponse = await fetch(mediaUrl);
            let svgData = await svgResponse.text();
            return svgData;
        }

        return mediaUrl;
    }

    return (
        <div
            className={`flex flex-col items-center justify-between p-4 border rounded shadow-lg ${className}`}
        >
            {mediaMeta.isBeingCreated ? (
                <Player
                    src="https://storage.googleapis.com/bashful_studio_web_assets/animations/blockchain.json"
                    className="player"
                    loop
                    autoplay
                />
            ) : (
                mediaMeta.urls.map((url, index) => (
                    <>
                <object
                    data={url}
                    type="image/svg+xml"
                    className="w-full h-64 object-contain mb-4"
                    aria-label='Generated Image'
                />
                <GlowLoaderButton
                onClick={() => handleDownload(url)}
                className="flex items-center border border-spacing-2 p-2"
            >
                <GetAppIcon className="mr-2" />
                Download
            </GlowLoaderButton>
            </>
            )))}

        </div>
    );
};

export default MediaDownload;
