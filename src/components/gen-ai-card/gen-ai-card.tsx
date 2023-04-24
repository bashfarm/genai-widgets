import { useEffect, useState } from 'react';
import { GenAISetting } from 'genai';
import { useGenerateTextImage } from '../../hooks/ai_hooks';
import GlowLoaderButton from '../glow-loader-button/glow-loader-button';

interface GenAICardProps {
  description: string;
  imgb64Str?: string;
  genAISetting?: GenAISetting;
}

const GenAICard = ({ description, imgb64Str, genAISetting }: GenAICardProps) => {
  const [editedDescription, setEditedDescription] = useState(description);
  const [aiSetting, setAiSetting] = useState(genAISetting ?? new GenAISetting({ prompt: editedDescription }));
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
    <div className="flex flex-col justify-start items-start bg-white rounded-lg shadow-lg p-6 max-w-md">
      <div className="relative w-full mb-4">
 
          <img src={imageUrl} alt="Generated" className="w-full h-auto rounded-lg" />

              <GlowLoaderButton className='bg-purple-500' onClick={async () => {
                setLoading(true);
                await handleGenerateClick();
                setLoading(false);
              }}>
                  <span className="ml-2">{loading ? 'Generating...' : 'Generate'}</span>
              
              </GlowLoaderButton>
      </div>
      <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
        Description:
      </label>
      <textarea
        id="description"
        className="w-full rounded-md border border-gray-300 focus:border-blue-500 px-3 py-2 mb-4 text-black"
        value={editedDescription}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default GenAICard;
