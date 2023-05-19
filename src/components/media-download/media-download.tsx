import React from 'react';
import GlowLoaderButton from '../glow-loader-button/glow-loader-button';
import GetAppIcon from '@mui/icons-material/GetApp';

interface MediaDownloadProps {
    url: string;
    className?: string;
}

const MediaDownload: React.FC<MediaDownloadProps> = ({ url, className }) => {
    const handleDownload = async () => {
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

    return (
        <div className={`flex flex-col items-center justify-between p-4 border rounded shadow-lg ${className}`}>
            <img src={url} alt="Media preview" className="w-full h-64 object-contain mb-4" />
            <GlowLoaderButton onClick={handleDownload} className="flex items-center border border-spacing-2 p-2">
                <GetAppIcon className="mr-2" />
                Download
            </GlowLoaderButton>
        </div>
    );
};

export default MediaDownload;
