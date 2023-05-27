import React, { useEffect } from 'react';
import MediaDownload from '../media-download/media-download';
import { Player } from '@lottiefiles/react-lottie-player';

export interface MediaMeta {
    urls: string[];
    mediaType: string;
    userPrompt?: string;
    generatedPrompt?: string;
    isBeingCreated?: boolean;
}

interface GeneratedMediaSectionProps {
    mediaMeta: MediaMeta[];
    className?: string;
}

const GeneratedMediaSection: React.FC<GeneratedMediaSectionProps> = ({ mediaMeta, className }) => {
    const [latestMediaMeta, setLatestMediaMeta] = React.useState<MediaMeta>(mediaMeta[mediaMeta.length -1]);

    useEffect(() => {
        setLatestMediaMeta(mediaMeta[mediaMeta.length -1]);
        console.log(mediaMeta);
        console.log(mediaMeta[mediaMeta.length -1]);
        console.log(latestMediaMeta);
    }, [mediaMeta]);

    return (
        <div className={`grid  gap-4 ${className} bg-purple-800 text-center items-center`}>
                                       
            {mediaMeta.length === 0 && (
                <div className="text-center text-white">
                    <h1 className="text-2xl">No Media generated yet</h1>
                    <p className="text-lg">Describe your image and Click on the "Generate" button to generate media, or press Enter</p>
                </div>
            )}
            {mediaMeta.length > 0 &&
                    <MediaDownload
                        mediaMeta={mediaMeta[mediaMeta.length -1]}
                        className="bg-purple-900 text-white"
                        isBeingCreated={false}
                    />
                }
        </div>
    );
};

export default GeneratedMediaSection;
