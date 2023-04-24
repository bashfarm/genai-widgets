import { useEffect, useState } from 'react';
import { GenAISetting } from 'genai';
import { useGenerateTextImage } from '../../hooks/ai_hooks';
import GlowLoaderButton from '../glow-loader-button/glow-loader-button';
import { Tooltip } from '@mui/material';

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

  const { imageUrl, handleGenerateClick } = useGenerateTextImage(aiSetting);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedDescription(event.target.value);
  };

  useEffect(() => {
    setAiSetting({
      ...aiSetting,
      prompt: editedDescription,
    } as GenAISetting);
  }, [editedDescription]);

  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="relative w-full mb-4">
        <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-lg" />
      </div>
      <div className="w-full h-full">
        <Tooltip title="Enter a description here to generate an AI-generated image.  You don't have to be detailed" placement="top">
          <label htmlFor="description" className="block text-gray-400 font-light text-sm mb-3 cursor-pointer">
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
        <Tooltip title="Click here to genrate an image based on the entered description" placement="top">
      <div className="w-full">
          <GlowLoaderButton
            className="bg-purple-500 mt-2 w-full h-full rounded-lg text-white font-semibold "
            onClick={async () => {
              setLoading(true);
              await handleGenerateClick();
              setLoading(false);
            }}
          >
            {loading ? 'Generating...' : 'Generate'}
          </GlowLoaderButton>
      </div>
        </Tooltip>
    </div>
  );
};

export default GenAICard;
