import React from 'react';
import MediaDownload from '../media-download/media-download';

export interface MediaMeta {
    url: string;
    mediaType: string;
}

interface GeneratedMediaSectionProps {
    urls: MediaMeta[];
    className?: string;
}

const GeneratedMediaSection: React.FC<GeneratedMediaSectionProps> = ({ urls, className }) => {
    return (
        <div className={`grid  gap-4 ${className} bg-black`}>
            {urls.map((urlObj, index) => (
                <MediaDownload key={index} url={urlObj.url} className='bg-purple-900 text-white' />
            ))}
        </div>
    );
};

export default GeneratedMediaSection;
