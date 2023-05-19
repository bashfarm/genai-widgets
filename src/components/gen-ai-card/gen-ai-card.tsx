import { useEffect, useState } from 'react';
import { GenAISetting } from 'genai';
import { useGenerateTextImage } from '../../hooks/ai_hooks';
import GlowLoaderButton from '../glow-loader-button/glow-loader-button';
import { Slider, Tooltip } from '@mui/material';
import InfoBar from '../info-bar/info-bar';
import { DEFAULT_GEN_IMAGE, DEVHOST  } from '../../constants/asset_urls';

interface GenAICardProps {
    description: string;
    imgb64Str?: string;
    genAISetting?: GenAISetting;
}

const GenAICard = ({ description, imgb64Str, genAISetting }: GenAICardProps) => {
    const [editedDescription, setEditedDescription] = useState(description);
    const [aiSetting, setAiSetting] = useState(
        genAISetting ?? new GenAISetting({ prompt: editedDescription })
    );
    const [loading, setLoading] = useState(false);
    const [hasRanBefore, setHasRanBefore] = useState(false);
    const [stylingStrength, setStylingStrength] = useState(50);
    const [imageConsistency, setImageConsistency] = useState(50);

    const { imageUrl, handleGenerateClick } = useGenerateTextImage(aiSetting);

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedDescription(event.target.value);
    };
    const handleStylingStrengthChange = (event: any, newValue: number | number[]) => {
        setStylingStrength(newValue as number);
    };

    const handleImageConsistencyChange = (event: any, newValue: number | number[]) => {
        setImageConsistency(newValue as number);
    };

    useEffect(() => {
        setAiSetting({
            ...aiSetting,
            prompt: editedDescription,
        } as GenAISetting);
    }, [aiSetting, editedDescription]);

    return (
        <div className="grid grid-cols-1 gap-4 justify-items-center bg-white rounded-lg shadow-lg p-6 max-w-md">
            <div className="relative w-full mb-4">
                <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full">
                <Tooltip
                    title="This is how much the prompt should be followed"
                    
                    placement="top"
                >
                    <div className="w-full">
                    <label
                        htmlFor="styling-strength"
                        className="block text-gray-400 font-light text-sm mb-3"
                    >
                        Styling Strength:
                    </label>
                    <Slider
                        id="styling-strength"
                        value={stylingStrength}
                        onChange={handleStylingStrengthChange}
                        aria-labelledby="input-slider"
                    />
                    </div>
                </Tooltip>
                <Tooltip
                    title={
                        imageUrl === DEFAULT_GEN_IMAGE
                            ? 'This is a placeholder image, generate a new image or upload one to begin.'
                            : 'Set how much of the image should remain similar.'
                    }
                    placement="top"
                >
                    <div className="w-full">
                        <label
                            htmlFor="image-consistency"
                            className="block text-gray-400 font-light text-sm mb-3"
                        >
                            Image Consistency:
                        </label>

                        <Slider
                            id="image-consistency"
                            value={imageConsistency}
                            onChange={handleImageConsistencyChange}
                            aria-labelledby="input-slider"
                            disabled={imageUrl === DEFAULT_GEN_IMAGE}
                        />
                    </div>
                </Tooltip>
            </div>
            <div className="w-full h-full">
                <Tooltip
                    title="Enter a description here to generate an AI-generated image.  You don't have to be detailed"
                    placement="top"
                >
                    <label
                        htmlFor="description"
                        className="block text-gray-400 font-light text-sm mb-3 cursor-pointer"
                    >
                        Description:
                    </label>
                </Tooltip>
                <textarea
                    id="description"
                    className="w-full rounded-md border border-gray-300 focus:border-blue-500 px-3 py-2 text-black"
                    value={editedDescription}
                    onChange={handleDescriptionChange}
                    style={{ marginTop: '-0.5rem' }}
                />
            </div>
            <Tooltip
                title="Click here to genrate an image based on the entered description"
                placement="top"
            >
                <div className="w-full">
                    <GlowLoaderButton
                        className="bg-purple-500 mt-2 w-full h-full rounded-lg text-white font-semibold "
                        onClick={async () => {
                            setLoading(true);
                            await handleGenerateClick();
                            setLoading(false);
                            setHasRanBefore(true);
                        }}
                    >
                        {loading ? 'Generating...' : 'Generate'}
                    </GlowLoaderButton>
                </div>
            </Tooltip>
            {/* Show info bar toast notifcation when generation is done */}
            {!loading && hasRanBefore && <InfoBar message={'Image done generating'} />}
        </div>
    );
};

export default GenAICard;
